import React from 'react';
import './Termscss.css';
import { Link } from 'react-router-dom';
import expresst from '../images/expresst.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions">
      <div className="header">
        <h1>Terms and Conditions</h1>
      </div>
      <nav className="navbar">
          <ul>
            <div className="logo-container">
              <img src={expresst} alt="Your Logo" />
            </div>
           
            <li>
              <Link to="/home"><FontAwesomeIcon icon={faHome} /> {/* Home icon */}
              </Link>
            </li>
            <li>
              <Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> {/* About Us icon */}
              </Link>
            </li>
            <li><Link to="/">Logout</Link></li>
          </ul>
        </nav>

      <h2><FontAwesomeIcon icon={faCheckCircle} /> Acceptance of Terms</h2>
      <div className='aa'>
        <p>By accessing or using our services, you agree to comply with and be bound by these Terms and Conditions.</p>
      </div>

      <h2><FontAwesomeIcon icon={faExclamationCircle} /> User Responsibilities</h2>
      <div className='bb'>
        <p>As a user, you are responsible for:</p>
        <ul>
          <li>Complying with applicable laws and regulations</li>
          <li>Not engaging in unauthorized activities on our platform</li>
          {/* Add more user responsibilities as applicable */}
        </ul>
      </div>

      <h2><FontAwesomeIcon icon={faCheckCircle} /> Service Availability</h2>
      <div>
        <p>We make no guarantee regarding the availability of our services and may modify or discontinue them at any time.</p>
      </div>

      {/* Add more sections for Disclaimers, Intellectual Property, Termination, Governing Law, etc. */}

      <div className="contact-info">
        <h2><FontAwesomeIcon icon={faExclamationCircle} /> Contact Information</h2>
        <div className='cc'>
          <p>If you have any questions or concerns about our Terms and Conditions, please contact us at:</p>
          <p>Contact Email: your@email.com</p>
          <p>These Terms and Conditions were last updated on [Date].</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
