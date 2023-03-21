import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Searchform extends React.Component {

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    
          <Form.Control type="text" placeholder="What food are you in the mood for" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
      
          <Form.Control type="text" placeholder="Location" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Searchform;