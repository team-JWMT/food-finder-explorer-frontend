import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import CompanyCardResult from './CompanyCardResult';
import CompanyCardCollection from './CompanyCardCollection'
import HomepageIcons from './HomepageIcons'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoResults from './NoResults';
import CompanyModal from './CompanyModal';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      isModalShowing: false,
      modalInfo: {},
      profile_name: '',
      profile_email: '',
      favorites: []

    }
  }

  handleCloseModal = () => {
    this.setState({
      isModalShowing: false,

    });
  }
  handleOpenModal = () => {
    this.setState({
      showModal: true,
    });
  }

  getClickedCompanyInfo = (company) => {
    this.setState({
      modalInfo: company,
      isModalShowing: true,
    })
  }

  getProfileInfo = (name, email) => {
    this.setState({
      profile_name: name,
      profile_email: email
    })
  }

  checkProfileExists = async (email) => {
    let check = await axios.get(`${process.env.REACT_APP_SERVER}/collection/${email}`)

    let profile = check.data[0]

    if (check.data.length !== 0) {
      this.setState({
        profileExists: true,
        favorites: profile.favorited,
        profile_name: profile.profile_name,
        profile_email: profile.profile_email
      })
    } else {
      this.setState({
        profile_name: this.props.auth0.user.name,
        profile_email: this.props.auth0.user.email
      }, async () => {
        let profile = {
          profile_name: this.state.profile_name,
          profile_email: this.state.profile_email,
          favorited: this.state.favorites
        }
        try {
          let url = `${process.env.REACT_APP_SERVER}/collection`;
          await axios.post(url, profile)
        } catch (error) {
          console.log(error.response);
        }
      })
    }
  }

  handleInput = (e) => {
    const { id, value } = e.target;

    this.setState({
      [id]: value
    })
  };

  getCompanyData = async (e) => {
    e.preventDefault();

    try {
      let reqToServer = await axios.get(`${process.env.REACT_APP_SERVER}/search?term=${this.state.foodForm}&location=${this.state.locationForm}`);
      this.setState({
        companies: reqToServer.data
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMsg: `ERROR: ${error.response}`
      })
    }
  }

  removeFromFavorites = async (company) => {
    try {
      let updatedArray = [...this.state.favorites];
      updatedArray.splice(updatedArray.indexOf(company), 1)
      this.setState({
        favorites: updatedArray
      }, async () => {
        let url = `${process.env.REACT_APP_SERVER}/collection/${this.state.profile_email}`
        await axios.put(url, { favorited: this.state.favorites });
        console.log(this.state.favorites)
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMsg: `ERROR: ${error.response.status}`
      });
    }
  }

  addToFavorites = async (company) => {
    console.log(company);
    try {

      let updatedArray = [...this.state.favorites];
      updatedArray.push(company)

      this.setState({
        favorites: updatedArray
      }, async () => {
        let url = `${process.env.REACT_APP_SERVER}/collection/${this.state.profile_email}`
        await axios.put(url, { favorited: this.state.favorites });
      });

    } catch (error) {
      this.setState({
        error: true,
        errorMsg: `ERROR: ${error.response.status}`
      })
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Router>
          <Navbar
            authorization={this.props.auth0.isAuthenticated}
            handleInput={this.handleInput}
            searchSubmit={this.getCompanyData}
            sendToDB={this.profileToBackend}
            checkProfile={this.checkProfileExists}
          />
          <Routes>
            <Route
              exact path="/"
              element={<HomepageIcons />}
            >
            </Route>
            <Route
              exact path="/results"
              element={this.state.companies.length > 0 ?
                <>
                  <CompanyCardResult
                    data={this.state.companies}
                    getClickedComp={this.getClickedCompanyInfo}
                    addFavorite={this.addToFavorites}
                  />
                  <CompanyModal
                    CloseModal={this.handleCloseModal}
                    ModalState={this.state.isModalShowing}
                    modalInfo={this.state.modalInfo}
                  />
                </>
                :
                <NoResults />
              }
            >
            </Route>
            <Route
              exact path="/collection"
              element={this.state.favorites.length > 0 ?

                <CompanyCardCollection
                  style={{ textAlign: "center" }}
                  data={this.state.favorites}
                  getClickedComp={this.getClickedCompanyInfo}
                  removeFavorite={this.removeFromFavorites}
                />

                :
                <NoResults />
              }
            >
            </Route>
          </Routes>
        </Router>

      </>

    );
  }
}



export default withAuth0(App);
