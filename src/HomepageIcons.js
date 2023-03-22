import React from 'react'


export default class Icons extends React.Component {

  render() {
    return (
      <div className='iconContainer'>

      <FontAwesomeIcon icon={solid("coffee-pot")} />
      <FontAwesomeIcon icon={solid("pizza-slice")} />
      <FontAwesomeIcon icon={duotone("sushi")} />
      <FontAwesomeIcon icon={duotone("burger-soda")} />
      <FontAwesomeIcon icon={solid("ice-cream")} />
      <FontAwesomeIcon icon={light("taco")} />
      <FontAwesomeIcon icon={regular("cart-shopping")} />
      <FontAwesomeIcon icon={solid("beer-mug")} />

      </div>
    )
  }
}