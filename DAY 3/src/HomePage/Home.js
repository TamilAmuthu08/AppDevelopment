import React from 'react';
import './Homecss.css'; // Include your CSS styles here
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <div className="login-container">
        <div className="login-header">Welcome to T-Shirt Printing</div>
        <div className="form-group">
          <Link to="/" className="login-button">
            Login
          </Link>
        </div>
        <div className="form-group">
          <Link to="/signup" className="signup-button">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
