import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <span className="text-muted">&copy; 2024 Atheneas Group, Inc</span>
          </a>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-muted" href="https://twitter.com/AteneasGrop" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/company/atheneas-group/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/profile.php?id=61559122274985" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;