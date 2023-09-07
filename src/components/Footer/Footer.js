import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <Link to="/contact"><li>Contact us</li></Link>
            <li>FAQ's</li>
            <li>Product Care</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Check order status</li>
            <li>Return policy</li>
            <li>Gwarranty</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About us</h4>
          <ul>
            <li>History of brand</li>
            <li>Careers</li>
            <li>Artworks</li>
          </ul>
          </div>
    <div className="footer-section">
      <h4>Connect with us</h4>
      <ul>
        <li><span className='underlined'>Sign up</span> for newsletter</li>
        <li>Follow us</li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>JKWEAR</p>
  </div>
</div>
);
};

export default Footer;