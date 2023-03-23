import React from 'react';
import './App.css';
import Navbar from './Navbar'
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import CompanyCardResult from './CompanyCardResult';
import CompanyCardCollection from './CompanyCardCollection'
import HomepageIcons from './HomepageIcons'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoResults from './NoResults'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      isModalShowing: false,
      modalInfo: {},
    }
  }

  getClickedCompanyInfo = (company) => {
    this.setState({
      modalInfo: company
    })
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
