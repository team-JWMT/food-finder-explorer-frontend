import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CompanyModal from './CompanyModal';


class Companycard extends React.Component {

  render() {
    let cardComponent = this.props.companies.map((business, idx) => {

      return (
        <div key={idx} onClick={this.props.handleOpenModal}>
        <Card>
          <Card.Title>{business.name}</Card.Title>
          <Card.Img src={business.image_url} />
          <Card.Body>
            {business.location}
            {business.rating}
            <div onClick={this.props.handleOpenModal}>
            <Button variant="primary"><p onClick={this.handleDelete}>Delete Favorite</p></Button>
            </div>
          </Card.Body>
        </Card>
        </div>
       
      );
    });
    return (
      <main>
        {cardComponent}
        <CompanyModal />
      </main>
    );
  }
}
export default Companycard;