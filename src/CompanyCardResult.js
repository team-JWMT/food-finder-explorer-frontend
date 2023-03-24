import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { withAuth0 } from '@auth0/auth0-react'


class Companycard extends React.Component {

  handleAdd = async (company) => {
    console.log(company)
    const { isAuthenticated } = this.props.auth0;

    if (isAuthenticated) {
      let addStore = this.props.addFavorite;

      addStore(company);

    } else {
      alert("Sign in to add company to collection");
    }
  }

  render() {

    let cardComponent = this.props.data.map((company, idx) => {
      return (
        <>

        <Card key={idx} className="cardImage">
          <Card.Title>{company.name}</Card.Title>
          <Card.Img src={company.image_url} onClick={() => this.props.getClickedComp(company)} style={{ width: '20rem'}} variant="top"/>
          <Card.Body className='cardDetails'>
            <p>City: {company.location.city},{company.location.state}</p> 
            {/* <p>{company.location.state}</p> */}
            <p>Rating: {company.rating}</p>
            <Button variant="primary" onClick={() => this.handleAdd(company)}>
              Add Favorite
            </Button>
          </Card.Body>
        </Card>        
        </>
      );
    });

    return (
      <main>
        {cardComponent}
      </main>
    );
  }
}

export default withAuth0(Companycard);
