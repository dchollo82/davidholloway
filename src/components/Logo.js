import React from 'react';

class Logo extends React.Component {
    render() {
      return (
          
        <h1>
          <a href="/" rel="home">
            <picture>
              {/* <source srcset="" type="image/svg+xml"></source> */}
              <img src="http://via.placeholder.com/100x100" alt="logo"></img>
            </picture>
          </a>
        </h1>             
        
        
      )
    }
  }

export default Logo;