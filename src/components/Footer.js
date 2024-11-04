import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} Bryan's Café. All rights reserved. | 
        <Link to="/privacy-policy" className="footer-link"> Privacy Policy</Link>
      </p>
    </footer>
  );
};

export default Footer;
