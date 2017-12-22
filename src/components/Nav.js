import React from 'react';

class Nav extends React.Component {
    render() {
      return (
                    
        <nav className="nav" role="navigation">
            <a className="nav__link" href="/contact">Resume</a>
            <a className="nav__link" href="/about">About</a>
            <a className="nav__link" href="/contact">Contact</a>
        </nav>    

      )
    }
  }

export default Nav;