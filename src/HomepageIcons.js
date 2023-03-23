import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPizzaSlice, faHamburger, faIceCream, faShoppingCart, faBeer } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar'


export default class HomepageIcons extends React.Component {
  render() {
    return (
      <>
      <Navbar/>

      <div className="d-flex flex-wrap justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faCoffee} size="5x" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faPizzaSlice} size="5x" />
        </div>
        {/* <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faSushi} size="5x" />
        </div> */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faHamburger} size="5x" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faIceCream} size="5x" />
        </div>
        {/* <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faTaco} size="5x" />
        </div> */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faShoppingCart} size="5x" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <FontAwesomeIcon icon={faBeer} size="5x" />
        </div>
      </div>

      </>
    );
  }
}
