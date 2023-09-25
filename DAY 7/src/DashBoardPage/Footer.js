import React from "react";
import "./Footercss.css"; // Add your footer styling here
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>48,East Pondy Road</p>
          <p>Villupuram,TamilNadu</p>
          <p>Email: appliancesos@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/Aboutus">About Us</a>
            </li>
            
          </ul>
        </div>
        <div className="footer-links"><Link to='/term'><h3>Terms and Conditions</h3></Link>
         
          <ul>
            <li>
              <a href="/">Disclaimer</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/about">Feedback</a>
            </li>
            <li>
              <a href="/about">FAQ</a>
            </li>

          </ul>
        </div>
        <div className="footer-links">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FacebookIcon /> Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <TwitterIcon /> Twitter
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <InstagramIcon /> Instagram
              </a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Home Appliance Service Center</p>
      </div>
    </footer>
  );
}

export default Footer;