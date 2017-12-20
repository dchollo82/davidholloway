import React from 'react';
import Avatar from './Avatar';

class Header extends React.Component {
    render() {
      return (
          <div className="header">
              <div className="intro">
                <h1 className="intro__title">David Holloway</h1>            
                <div className="intro__info">
                    <p className="intro__tagline">UI Developer &amp; UX Designer from London, UK.</p>
                    <p className="intro__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo auctor, feugiat velit nec, dapibus risus. Cras finibus posuere tellus, eget pulvinar nisi blandit et. Phasellus ut lobortis diam. Proin commodo mattis dolor eget facilisis.</p>                
                </div>
            </div>
            <nav className="nav" role="navigation">
                <a className="nav__link" href="/contact">Resume</a>
                <a className="nav__link" href="/about">About</a>
                <a className="nav__link" href="/contact">Contact</a>
            </nav>
            <Avatar />
        </div>                                          
      )
    }
  }

export default Header;