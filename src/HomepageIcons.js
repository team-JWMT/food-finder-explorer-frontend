import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPizzaSlice, faHamburger, faIceCream, faShoppingCart, faBeer, faTaco, faSushi } from '@fortawesome/free-solid-svg-icons';


export default class HomepageIcons extends React.Component {
  render() {
    return (
      <>

      <div className="d-flex flex-wrap justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faCoffee} size="8x" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faPizzaSlice} size="8x" />
        </div>
        {/* <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faSushi} size="5x" />
        </div> */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faHamburger} size="8x" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faIceCream} size="8x" />
        </div>
        {/* <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faTaco} size="5x" />
        </div> */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faShoppingCart} size="8x" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faBeer} size="8x" />
        </div>
      </div>

      </>
    );
  }
}
