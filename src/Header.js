import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <header class="header">
          <a class="header_link" href=''>
          <h1 class="header_link" style={{opacity: 1, transform: 'scale(1)',}}>City Food Explorer</h1>
          </a>
        </header>
      </>
   );
  }
}

export default Header;