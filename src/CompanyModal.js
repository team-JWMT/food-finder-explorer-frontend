import React from 'react'
import { Button, Modal } from 'react-bootstrap'

class CompanyModal extends React.Component {

  constructor() {
    super();
    this.state = {
      showHide: false
    }
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
  }


  render() {
    return (
       <>
          <Modal show={this.props.ModalState} onHide={this.props.CloseModal}>
          <Modal.Header>
            <Modal.Title>{this.props.modalInfo.name}</Modal.Title>
            <img src={this.props.modalInfo.image_url} alt={this.props.modalInfo.name} width={400} height={350}/>
          </Modal.Header>
          <Modal.Body style={{display: "flex", flexDirection: "column"}}>
            <p>Restaurant Rating: {this.props.modalInfo.rating}</p>
            <p>Review Count: {this.props.modalInfo.review_count}</p>
           <p><a href='{this.props.modalInfo.url}'>Visit Website</a></p>
            <p>{this.props.modalInfo.display_phone}</p>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.CloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
        
  };

}

export default CompanyModal;