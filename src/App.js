import React from 'react';
import './App.css';
import Navbar from './Navbar'
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
// import Companycard from './Companycard';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      isModalShowing: false,
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
        errorMsg: `ERROR: ${error.response.status}`
      })
    }
  }

render() {
  console.log(this.state);
    return (
      <>
        <Navbar
          authorization={this.props.auth0.isAuthenticated}
          handleInput={this.handleInput} 
          searchSubmit={this.getCompanyData}/>
      </>

    );
  }
}



export default withAuth0(App);
