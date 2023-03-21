import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

class NavScrollExample extends React.Component() {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Form class="form">
                <div class="form_input-food-container">
                  <svg></svg>
                  <Form.Control
                    type="text"
                    placeholder="What are you in the mood for?"
                    value="Vegan"
                    control-id="ControlID"
                    className="me-2"
                    aria-label="Search"
                  />
                  <ul>
                    <li class="form_food-item">Sushi</li>
                    <li class="form_food-item">Tacos</li>
                    <li class="form_food-item">Pizza</li>
                    <li class="form_food-item">Pasta</li>
                    <li class="form_food-item">Thai</li>
                    <li class="form_food-item">Mediterranean</li>
                    <li class="form_food-item">French</li>
                    <li class="form_food-item">Vegan</li>
                  </ul>
                </div>
                <div class="form_input-user-location-container">
                  <svg></svg>
                  <Form.Control
                    type="text"
                    placeholder="City, neighborhood, zipcode, etc."
                    value="Seattle, WA"
                    className="me-3"
                    aria-label="Search"
                    control-id="ControlID-2"
                  />
                  <ul class="form_user-location-item">
<svg></svg>
<span class="form_current-location">Current Location</span>
<li class="form_user-location-item">Chicago, IL</li>
<li class="form_user-location-item">Los Angeles, CA</li>
<li class="form_user-location-item">Miami, FL</li>
<li class="form_user-location-item">Nashville, TN</li>
<li class="form_user-location-item">Boston, MA</li>
<li class="form_user-location-item">Seattle, WA</li>
<li class="form_user-location-item">Kansas City, MO</li>
<li class="form_user-location-item">Austin,TX</li>
                  </ul>
                  </div>
                  <Button type="submit" variant="outline-success"><span class="form button">Search</span></Button>
              </Form>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About Us</Nav.Link>
              <Nav.Link href="#action2">Favorites/My Collection</Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3"></NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
  }
}

export default NavScrollExample;