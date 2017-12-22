import React from 'react';

class Footer extends React.Component {
    render() {
      return (
        <div className="footer">
          <p className="footer__copyright">&copy; David Holloway</p>
          <div className="footer__social">
            <a href="#" className="footer__icon footer__icon--github">Github</a>
            <a href="#" className="footer__icon footer__icon--linkedin">LinkedIn</a>
            <a href="#" className="footer__icon footer__icon--codepen">Codepen</a>
            <a href="#" className="footer__icon footer__icon--twitter">Twitter</a>
            <a href="#" className="footer__icon footer__icon--instagram">Instagram</a>
          </div>
        </div>
      )
    }
  }

export default Footer;