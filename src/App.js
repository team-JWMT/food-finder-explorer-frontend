import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import CompanyCardResult from './CompanyCardResult';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoResults from './NoResults'
import CompanyModal from './CompanyModal'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      isModalShowing: false,
      modalInfo: {},
    }
  }

  handleCloseModal = () => {
this.setState({
showModal: false,

  });
}
handleOpenModal = () => {
  this.setState({
showModal:true,
  });
}

  getClickedCompanyInfo = (company) => {
    this.setState({
      modalInfo: company,
      isModalShowing: true,
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
                <>
                <CompanyCardResult
                  data={this.state.companies}
                  getClickedComp={this.getClickedCompanyInfo}
                />
                <CompanyModal
                  CloseModal={this.handleCloseModal}
                  ModalState={this.state.isModalShowing}

                />

                </>
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
