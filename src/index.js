import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css'
import App from './components/App';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';

// const Root = () => {
//     return (
//         <BrowserRouter>
//             <div>
//                 <Match pattern="/contact" component={Contact} />
//                 <Miss component={NotFound} />
//             </div>
//         </BrowserRouter>
//     )
// }

// Render
render(<App/>, document.querySelector('#main'));
