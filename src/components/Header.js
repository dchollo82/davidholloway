import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Avatar from './Avatar';

class Header extends React.Component {
    render() {
      return (
        <div>
            <Logo />                                    
            <Nav />  
            <Avatar />
        </div>
                
      )
    }
  }

export default Header;