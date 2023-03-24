import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar'
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
        <>

        <Card key={idx} style={{ textAlign: "center"}} >
          <Card.Title>{company.name}</Card.Title>
          <Card.Img src={company.image_url} />
          <Card.Body>
            City: {company.location.city}, State: {company.location.state}
            Rating: {company.rating}
            <Button variant="primary" onClick={() => this.props.removeFavorite(company)}>
              Delete
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

export default CompanyCardCollection;
