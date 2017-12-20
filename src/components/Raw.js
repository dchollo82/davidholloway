import React from 'react';

class Raw extends React.Component {
    render() {
      return (
        <div>
            <h1>This is a H1</h1>
            <h2>This is a H2</h2>
            <h3>This is a H3</h3>
            <h4>This is a H4</h4>
            <h5>This is a H5</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis quam semper, euismod metus et, blandit libero. Cras auctor molestie tellus, eget pellentesque lacus laoreet eget. Duis volutpat dignissim justo a pretium. Phasellus pretium velit vehicula enim sagittis efficitur vitae non leo. Sed consectetur et tellus nec posuere. Proin libero massa, lacinia ac risus at, aliquam pretium lectus. Suspendisse eu nisl mollis, cursus mi lobortis, pretium lorem. Pellentesque elementum, risus sed venenatis tincidunt, est odio dapibus nulla, eget vestibulum risus massa vel arcu. Pellentesque vel iaculis nisl, id pretium nulla.</p>
            <div class="intro">
              <h1 class="intro__title">Hi there</h1>
              <div class="intro__img">
                  <img src="http://via.placeholder.com/500x500" alt="A picture of David Holloway" />
              </div>
              <div class="intro__copy">
                  <p>I'm David Holloway, a UX Designer &amp; UI Developer from London, UK.</p>
                  <p>It's nice to meet you</p>
              </div>    
            </div>
            <div>
      <header role="banner">            
        <h1>
          <a href="/" rel="home">
            <picture>
              {/* <source srcset="" type="image/svg+xml"></source> */}
              <img src="http://via.placeholder.com/100x100" alt="logo"></img>
            </picture>
          </a>
        </h1>  
        <nav role="navigation">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>    
      </header>      
    </div>
        </div> 
        
      )
    }
  }

export default Raw;

