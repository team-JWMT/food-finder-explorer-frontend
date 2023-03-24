import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios';

class CompanyCardCollection extends React.Component {

  handleDelete = async (idx) => {
    const { data } = this.props;
    const deletedProfile = data[idx];

    try {
      await axios.delete(`${process.env.REACT_APP_SERVER}/companies/${deletedProfile.profile_email}`);
      const newData = data.filter((_, i) => i !== idx);
      this.props.updateData(newData);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { data } = this.props;

    let cardComponent = data.map((company, idx) => {
      return (

        <Card key={idx} className="cardImage">
            <Card.Title className="cardTitle">{company.name}</Card.Title>
            <Card.Img src={company.image_url} onClick={() => this.props.getClickedComp(company)} style={{ width: '20rem'}}/>
            <Card.Body className="cardDetails">
            <p>City: {company.location.city}, State: {company.location.state}</p>
            <p>Rating: {company.rating}</p>
            <Button variant="warning" onClick={() => this.props.removeFavorite(company)}>
              Remove
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

export default withAuth0(CompanyCardCollection);
