import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react'


class Companycard extends React.Component {

  handleAdd = async (company) => {
    const { isAuthenticated } = this.props.auth0;

    if (isAuthenticated) {
      try {
        await axios.post(`${process.env.REACT_APP_SERVER}/companies`, company);
        console.log(`Added ${company.name} to favorites`);
        // redirect to CompanyCardCollection.js
        this.props.history.push('/favorites');
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Sign in to add company to collection");
    }
  }

  render() {
    let cardComponent = this.props.data.map((company, idx) => {
      return (
        <Card key={idx} onClick={() => this.props.getClickedComp(company)} style={{ width: '20rem' }}>
          <Card.Title>{company.name}</Card.Title>
          <Card.Img src={company.image_url} />
          <Card.Body>
            {company.location.city}, {company.location.state}
            {company.rating}
            <Button variant="primary" onClick={() => this.handleAdd(company)}>
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

export default withAuth0(Companycard);
