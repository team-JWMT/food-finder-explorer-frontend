import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPizzaSlice, faHamburger, faIceCream, faShoppingCart, faBeer } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';

export default class HomepageIcons extends React.Component {

  handleClick = (searchQuery) => {
    console.log(`Searching for ${searchQuery}`);
    // Code to perform search using the searchQuery parameter
  }

  render() {
    return (
      <>
        <Header />
        <div className="d-flex flex-wrap justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <FontAwesomeIcon
              icon={faCoffee}
              size="8x"
              className="icon"
              onClick={() => this.handleClick('coffee shops in Seattle')}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <FontAwesomeIcon
              icon={faPizzaSlice}
              size="8x"
              className="icon"
              onClick={() => this.handleClick('pizza places in Seattle')}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <FontAwesomeIcon
              icon={faHamburger}
              size="8x"
              className="icon"
              onClick={() => this.handleClick('burger joints in Seattle')}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <FontAwesomeIcon
              icon={faIceCream}
              size="8x"
              className="icon"
              onClick={() => this.handleClick('ice cream shops in Seattle')}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="8x"
              className="icon"
              onClick={() => this.handleClick('shopping centers in Seattle')}
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <FontAwesomeIcon
              icon={faBeer}
              size="8x"
              className="icon"
              onClick={() => this.handleClick('bars in Seattle')}
            />
          </div>
        </div>
        <Footer />
        <style jsx>{`
          .icon {
            transition: all 0.3s ease;
          }
          .icon:hover {
            cursor: pointer;
            background-color: #eaeaea;
            font-size: 110px;
          }
        `}</style>
      </>
    );
  }
}
