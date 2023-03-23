import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Companycard extends React.Component {

  render() {
    let cardComponent = this.props.data.map((business, idx) => {
      return (
        <Card key={idx} style={{ width: '20rem' }}>
          <Card.Title>{business.name}</Card.Title>
          <Card.Img src={business.image_url} />
          <Card.Body>
            {business.location.city}, {business.location.state}
            {business.rating}
            <Button variant="primary">
              Delete
            </Button>
          </Card.Body>
        </Card>
      );
    });

    return (
      <main>
        {cardComponent}
      </main>
    );
  }
}
export default Companycard;