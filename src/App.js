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
      profile_name: '',
      profile_email: '',
      favorites: [],
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
  handleInput = (e) => {
    const { id, value } = e.target;

    this.setState({
      [id]: value
    })
  };

  getCompanyData = async (e) => {

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

  render() {
    console.log(this.state);
    return (
      <>
        <Router>
          <Navbar
            authorization={this.props.auth0.isAuthenticated}
            handleInput={this.handleInput}
            searchSubmit={this.getCompanyData}
            getProfile={this.getProfileInfo}
          />
          <Routes>
            <Route
              exact path="/"
              element={<HomepageIcons/>}
            >
            </Route>
            <Route
              exact path="/results"
              element={this.state.companies.length > 0 ?

                <CompanyCardResult
                  data={this.state.companies}
                  getClickedComp={this.getClickedCompanyInfo}
                  addFavorite={this.addToFavorites}
                />

                :
                <NoResults />
              }
            >
            </Route>
            <Route
              exact path="/collection"
              element={this.state.favorites.length > 0 ?

                <CompanyCardResult
                  data={this.state.favorites}
                  getClickedComp={this.getClickedCompanyInfo}
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
