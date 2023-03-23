import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { withAuth0 } from '@auth0/auth0-react'

class Searchform extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.props.auth0.isAuthenticated) {
      this.props.getProfile(this.props.auth0.user.name, this.props.auth0.user.email);
    }

    this.props.searchSubmit(e);

  }
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="foodForm">
          <Form.Control 
            type="text" 
            placeholder="What food are you in the mood for"
            onChange={this.props.handleInput}  
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="locationForm">
          <Form.Control 
            type="text" 
            placeholder="Location" 
            onChange={this.props.handleInput}
          />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    );
  }
}

export default withAuth0(Searchform);