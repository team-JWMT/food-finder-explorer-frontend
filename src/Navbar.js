import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Searchform from './Searchform';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react'

class Navigationbar extends React.Component {
  render() {

    return (
      <Navbar bg="light" expand="lg" >
        <Container>
          <Searchform
          handleInput={this.props.handleInput}
          />
        </Container>
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">My Favorites</Nav.Link>
          </Nav>

          <Nav>
            {this.props.auth0.isAuthenticated ? (
              <>
                <LogoutButton />
                <Profile />
              </>
            ) : (
              <LoginButton />
            )}
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Navigationbar);
