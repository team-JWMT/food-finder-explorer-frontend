import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar'
import axios from 'axios';

class Companycard extends React.Component {
  
  handleDelete = async (idx) => {
    const { data } = this.props;
    const deletedCompany = data[idx];

    try {
      await axios.delete(`${process.env.REACT_APP_SERVER}/companies/${deletedCompany.id}`);
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
        <Navbar/>

        <Card key={idx} style={{ width: '20rem' }}>
          <Card.Title>{company.name}</Card.Title>
          <Card.Img src={company.image_url} />
          <Card.Body>
            {company.location.city}, {company.location.state}
            {company.rating}
            <Button variant="primary" onClick={() => this.handleDelete(idx)}>
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

export default Companycard;
