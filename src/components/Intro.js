import React from 'react';

class Intro extends React.Component {
    render() {
      return (
          
        <div className="intro">
            <h1 className="intro__heading">Hi, there</h1>            
            <div className="intro__desc">
                <p className="intro__tagline">I'm David Holloway. A UI Developer from London, UK.</p>
                <p className="intro__copy">I'm Passionate about delightful, usable experiences made possible by great reusable and scalable code.</p>                
            </div>                     
        </div>            
        
        
      )
    }
  }

export default Intro;