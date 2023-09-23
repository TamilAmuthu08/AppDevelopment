import React, { useState } from 'react';
import './Homecss.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/UserSlice';

const Homepage = () => {
  const user = useSelector(selectUser);
  const email = user ? user.username : 'Guest'; // Check if 'user' is not null

  const [sidebarOpen1, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen1);
  };

  return (
    <div className="homepage">
      <nav className="navbar1">
        {/* Add navbar content here */}
        <ul>
          <li><Link to="/home">Home </Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Contact</li>
          <li>Customer Feedback</li>
          {/* Add more links or content as needed */}
        </ul>
      </nav>
      <aside className={`sidebar1 ${sidebarOpen1 ? 'open' : ''}`}>
        <div className="sidebar1-toggle" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className={`toggle-icon ${sidebarOpen1 ? 'open' : ''}`} />
        </div>
        <ul>
          <li>
            <Link to="/dash" className='disline'>Dashboard </Link>
          </li>
          <li>
            <Link to="/order" className='disline'> Order History</Link>
          </li>
          <li>
            <Link to="/productlist" className='disline'> Product Lists</Link>
          </li>
          <li>
            <Link to="/productlist" className='disline'>Admin Details</Link>
          </li>
        </ul>
      </aside>

      <main className="content1">
        <h2 className="content-header1">Welcome, {email}</h2>
      </main>
    </div>
  );
};

export default Homepage;
