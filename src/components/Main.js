import React from 'react';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';

const Main = (props) => {
  return (
    <div className="maincontent">
      <About /> 
      <Skills /> 
      <Portfolio />   
    </div>
    
  )
}
export default Main;