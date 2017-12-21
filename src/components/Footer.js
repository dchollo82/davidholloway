import React from 'react';

class Footer extends React.Component {
    render() {
      return (
        <div className="footer">
          <p className="footer__copyright">&copy; David Holloway</p>
          <ul className="footer__social__icons">
            <li className="footer__social__icon footer__social__icon--github">Github</li>
            <li className="footer__social__icon footer__social__icon--linkedin">LinkedIn</li>
            <li className="footer__social__icon footer__social__icon--codepen">Codepen</li>
            <li className="footer__social__icon footer__social__icon--twitter">Twitter</li>
            <li className="footer__social__icon footer__social__icon--instagram">Instagram</li>
          </ul>
        </div>
      )
    }
  }

export default Footer;