import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Saad</h1>

        <div className="footer__social">
          <a href="mailto:your-email@example.com" className='footer__social-link' target='_blank' rel="noopener noreferrer">
            <i className="bx bx-mail-send"></i>
          </a>

          <a href="tel:+1234567890" className='footer__social-link' target='_blank' rel="noopener noreferrer">
            <i className="bx bx-phone-call"></i>
          </a>

          <a href="https://wa.me/1234567890" className='footer__social-link' target='_blank' rel="noopener noreferrer">
            <i className="bx bxl-whatsapp"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; SaadKhan. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
