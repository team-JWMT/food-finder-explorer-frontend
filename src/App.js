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
      userInput: [],
      listBuisineses: [],
    }
  }
  
  handleInput = (e) => {
    this.setState({
      userInput: [e.target[0].value, e.target[1].value]

    })
  };

  getBusinessData = async (search, location) => {
    try {

      let reqToServer = await axios.get(`${process.env.REACT_APP_SERVER}/company?search=${search}&location=${location}`);

      this.setState({
        listBuisineses: reqToServer.data,
      });

    } catch (error) {

      this.setState({
        error: true,
        errorMsg: `ERROR: ${error.response.status}`
      })
    }
  }


  render() {
    return (
      <Navbar
        authorization={this.props.auth0.isAuthenticated} 
        handleInput={this.handleInput}
     />
    );
  }
}

export default withAuth0(App);
