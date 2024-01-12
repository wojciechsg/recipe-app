import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <p>© {new Date().getFullYear()} Recipe App. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#" className="text-white me-3">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-white me-3">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white me-3">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
