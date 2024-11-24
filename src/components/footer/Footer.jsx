import React from 'react';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <div className="contact-item">
          <i className="uil uil-phone-alt"></i>
          <span>+123 456 7890</span>
        </div>
        <div className="contact-item">
          <i className="uil uil-envelope"></i>
          <span>saadkhan2@gmail.com</span>
        </div>
        <div className="contact-item">
          <i className="uil uil-map-marker-alt"></i>
          <span>Islamabad, Pakistan</span>
        </div>
      </div>
      <div className="footer-social">
        <a href="#" className="social-icon"><i className="uil uil-github"></i></a>
        
        <a href="#" className="social-icon"><i className="uil uil-linkedin-alt"></i></a>
        <a href="#" className="social-icon"><i className="uil uil-skype-alt"></i></a>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
