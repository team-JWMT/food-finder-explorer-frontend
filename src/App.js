import React from 'react';
import './App.css';
import Navbar from './Navbar'
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      isModalShowing: false,
      listBuisineses: [],
    }
  }


  handleInput = (e) => {
    const { id, value } = e.target;

    this.setState({
      [id]: value
    })
  };

  getBusinessData = async (e) => {
    e.preventDefault();

    try {
      let reqToServer = await axios.get(`${process.env.REACT_APP_SERVER}/company?search=${this.state.foodForm}&location=${this.state.locationForm}`);

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
      <Navbar
        authorization={this.props.auth0.isAuthenticated}
        handleInput={this.handleInput}
        searchSubmit={this.getBusinessData}
      />
    );
  }
}

export default withAuth0(App);
