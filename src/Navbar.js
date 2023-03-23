import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Searchform from './Searchform';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom';

class Navigationbar extends React.Component {
  render() {

    return (
      <Navbar bg="light" expand="lg" >
        <Container>
          <Searchform
          handleInput={this.props.handleInput}
          searchSubmit={this.props.searchSubmit}
          getProfile={this.props.getProfile}
          />
        </Container>
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/collection">My Collection</Nav.Link>
            <Nav.Link as={Link} to="/results">Results</Nav.Link>
          </Nav>

          <Nav>
            {this.props.auth0.isAuthenticated ? (
              <>
                <LogoutButton />
                <Profile />
              </>
            ) : (
              <LoginButton 
                
              />
            )}
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Navigationbar);
