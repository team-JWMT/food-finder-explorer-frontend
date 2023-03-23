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
          <Modal>
          <Modal.Header>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
{/* <p></p>
<p></p> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
        
  };

}

export default CompanyModal;