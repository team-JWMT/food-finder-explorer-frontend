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
import NoResults from './NoResults'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      isModalShowing: false,
      modalInfo: {},
      profileExists: false,
      profile_name: '',
      profile_email: '',
      favorites: []
    }
  }

  getClickedCompanyInfo = (company) => {
    this.setState({
      modalInfo: company
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

    if (check.data.length !== 0) {
      this.setState({
        profileExists: true
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

  addToFavorites = async (company) => {
    console.log(company);
    try {

      let updatedArray = [...this.state.favorites];
      updatedArray.push(company)

      this.setState({
        favorites: updatedArray
      })
    } catch (error) {
      this.setState({
        error: true,
        errorMsg: `ERROR: ${error.response.status}`
      })
    }
  }

  profileToBackend = async () => {

    if (this.props.auth0.isAuthenticated && this.state.profileExists) {
      try {
        let url = `${process.env.REACT_APP_SERVER}/collection/${this.state.profile_email}`;
        let updatedProfile = await axios.put(url, { favorited: this.state.favorites });

        this.setState({
          favorites: updatedProfile.favorited
        });

      } catch (error) {
        console.log(error.response);
      }
    } else {
      try {
        let profile = {
          profile_name: this.state.profile_name,
          profile_email: this.state.profile_email,
          favorited: this.state.favorites
        }
        console.log(profile + " did not exist");
        let url = `${process.env.REACT_APP_SERVER}/collection`;
        await axios.post(url, profile)
      } catch (error) {
        console.log(error.response);
      }
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
          />
          <Routes>
            <Route
              exact path="/"
              element=<h1>Homepage</h1>
            >
            </Route>
            <Route
              exact path="/results"
              element={this.state.companies.length > 0 ?

                <CompanyCardResult
                  data={this.state.companies}
                  getClickedComp={this.getClickedCompanyInfo}
                  addFavorite={this.addToFavorites}
                  getProfile={this.getProfileInfo}
                  checkProfile={this.checkProfileExists}
                />

                :
                <NoResults />
              }
            >
            </Route>
            <Route
              exact path="/collection"
              element=<h1>some collection</h1>
            >
            </Route>
          </Routes>
        </Router>
      </>

    );
  }
}



export default withAuth0(App);
