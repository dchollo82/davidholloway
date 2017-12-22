import React from 'react';
import Intro from './Intro';
import Nav from './Nav';
import Avatar from './Avatar';

class Header extends React.Component {
    render() {
      return (
        <div>
            <Intro />        
            <Nav />
            <Avatar />
        </div>
                
      )
    }
  }

export default Header;