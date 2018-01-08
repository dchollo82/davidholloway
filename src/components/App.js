import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


// https://reactjs.org/docs/components-and-props.html

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <header role="banner">
          <Header /> 
        </header>
        <main role="main">
          <Main /> 
        </main>
        <footer>       
          <Footer /> 
        </footer>
      </div>
    )
  }

  


}
export default App;
