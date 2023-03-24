import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Searchform from './Searchform';
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class Navigationbar extends React.Component {

  handleDelete = async () => {
    this.props.deleteProfile();
    alert('Your profile has been deleted, alongside your collection.')
    window.location.reload(false);
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Searchform
            handleInput={this.props.handleInput}
            searchSubmit={this.props.searchSubmit}
          />
        </Container>
        <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link
              as={Link}
              to="/collection"
            >
              My Collection
            </Nav.Link>
            <Nav.Link as={Link} to="/results">Results</Nav.Link>
          </Nav>

          <Nav>
            {this.props.auth0.isAuthenticated ? (
              <>
                <Button
                  onClick={() => this.handleDelete()}
                >
                  Delete
                </Button>
                <LogoutButton />
                <Profile
                  checkProfile={this.props.checkProfile}
                />
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
