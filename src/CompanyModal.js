import React from 'react'
import Modal from 'react-bootstrap/Modal'

export default class CompanyModal extends React.Component {
constructor(props){
  super(props);
  this.state = {
    isModalDisplaying: false
    }
  }

  handleOpenModal = () => {
    this.setState ({
      isModalDisplaying: true
    })
  }

  handleCloseModal = () => {
    this.setState ({
      isModalDisplaying: false
    })
  }
  render() {
    return (
      <Modal onClick={this.handleCloseModal}>
      <Modal.Container>
        <Modal.Title>{this.data.name}</Modal.Title>
        <Modal.Image>{this.data.image_url}</Modal.Image>
      </Modal.Container>

      <Modal.Container>
        <p>{this.data.rating}</p>
        <p>{this.data.location}</p>
        <p>{this.data.url}</p>
        <p>{this.data.yelpReview}</p>
      </Modal.Container>
    </Modal>
    )
  }
}