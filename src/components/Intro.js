import React from 'react';

class Intro extends React.Component {
    render() {
      return (
          
        <div className="intro">
            <h1 className="intro__heading">Hi, I'm David Holloway</h1>            
            <div className="intro__desc">
                <p className="intro__tagline">A UI Developer from London, UK.</p>
                <p className="intro__copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo auctor, feugiat velit nec, dapibus risus. Cras finibus posuere tellus, eget pulvinar nisi blandit et. Phasellus ut lobortis diam. Proin commodo mattis dolor eget facilisis.</p>                
            </div>                     
        </div>            
        
        
      )
    }
  }

export default Intro;