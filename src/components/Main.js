import React from 'react';
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';

const Main = (props) => {
  return (
    <div>
      <Intro /> 
      <About />  
      <Skills /> 
      <Portfolio />   
    </div>
    
  )
}
export default Main;