import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Searchform from './Searchform';

class Navigationbar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>


          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">My Favorites</Nav.Link>

          </Nav>

        </Container>
        <Container>
          <Searchform/>
        </Container>
      </Navbar>
    );
  }
}

export default Navigationbar;