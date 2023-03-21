import React from 'react';
import './App.css';
import Navbar from './Navbar'
import { withAuth0 } from '@auth0/auth0-react'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      isModalShowing: false,
      userInput: '',

    }
  }

  render() {
    return (
      <Navbar
     authorization={this.props.auth0.isAuthenticated} />
  );
}
}

export default withAuth0(App);
