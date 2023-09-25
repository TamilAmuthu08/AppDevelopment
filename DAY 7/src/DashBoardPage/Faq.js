// FAQ.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Faqcss.css'; // Import your CSS file for styling if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import expresst from '../images/expresst.png';

const FAQ = () => {
  return (
    <div className='faquh'>
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        <nav className="navbar">
          <ul>
            <div className="logo-container">
              <img src={expresst} alt="Your Logo" />
            </div>
            <p>FAQ</p>
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

        <div className="faq-item">
          <h2>Q1: What is FAQ?</h2>
          <p>A1: FAQ stands for Frequently Asked Questions. It is a page where common questions and their answers are provided to help users.</p>
        </div>

        <div className="faq-item">
          <h2>Q2: How can I contact support?</h2>
          <p>A2: You can contact our support team by emailing support@example.com or using the contact form on our website.</p>
        </div>

        <div className="faq-item">
          <h2>Q3: Do you offer refunds?</h2>
          <p>A3: Yes, we offer refunds within 30 days of purchase. Please refer to our refund policy for more details.</p>
        </div>

        {/* Additional FAQ contents */}
        <div className="faq-item">
          <h2>Q4: How do I reset my password?</h2>
          <p>A4: To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions sent to your registered email to reset your password.</p>
        </div>

        <div className="faq-item">
          <h2>Q5: What payment methods do you accept?</h2>
          <p>A5: We accept payments via credit cards (Visa, MasterCard), PayPal, and bank transfers. You can choose your preferred payment method during the checkout process.</p>
        </div>

        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
};

export default FAQ;
