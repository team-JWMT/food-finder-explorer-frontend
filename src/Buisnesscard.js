import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Buisnesscard extends React.Component {

  getCompanyData = () => {

  }

  render() {
    let cardComponent = this.props.data.map((business, idx) => {

      return (
        <Card style={{ width: '18rem' }}>
          <Card.Title>{business.name}</Card.Title>
          <Card.Img src={business.image_url} />
          <Card.Body>
            {business.location}
            {business.rating}
            {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
            <Button variant="primary"><p onClick={this.handleDelete}>Delete Favorite</p></Button>
          </Card.Body>
        </Card>

      );
    })
    return(
    <main>
    { cardComponent }
    </main>
  ); 
  }
}
export default Buisnesscard;