import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import CompanyModal from './CompanyModal';


class Companycard extends React.Component {

  render() {
    let cardComponent = this.props.data.map((company, idx) => {
      return (
        <Card key={idx} onClick={() => this.props.getClickedComp(company)} style={{ width: '20rem' }}>
          <Card.Title>{company.name}</Card.Title>
          <Card.Img src={company.image_url} />
          <Card.Body>
            {company.location.city}, {company.location.state}
            {company.rating}
            <Button variant="primary">
              Add Favorite
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