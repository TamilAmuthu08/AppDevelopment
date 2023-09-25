import React, { useState } from 'react';
import './OrderHistorycss.css';
import { Link } from 'react-router-dom';
import expresst from '../images/expresst.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

const OrderHistory = () => {
  const orders = [
    {
      orderId: 1,
      customerName: 'Tamil Amuthu',
      orderDate: '2023-09-15',
      totalAmount: 50.0,
      status: 'Shipped',
    },
    {
      orderId: 2,
      customerName: 'Sherylin',
      orderDate: '2023-09-14',
      totalAmount: 35.0,
      status: 'Delivered',
    },
    {
      orderId: 3,
      customerName: 'Sivaudhaya',
      orderDate: '2023-09-14',
      totalAmount: 95.0,
      status: 'Delivered',
    },
    {
      orderId: 4,
      customerName: 'Yazhini',
      orderDate: '2023-08-14',
      totalAmount: 105.0,
      status: 'Delivered',
    },
    {
      orderId: 5,
      customerName: 'Sai Narendar',
      orderDate: '2023-09-1',
      totalAmount: 5.0,
      status: 'Shipped',
    },
    {
      orderId: 6,
      customerName: 'Rohini',
      orderDate: '2023-01-10',
      totalAmount: 45.0,
      status: 'Delivered',
    },
    {
      orderId: 7,
      customerName: 'Sindhu',
      orderDate: '2023-01-10',
      totalAmount: 15.0,
      status: 'Pending',
    },
    {
      orderId: 8,
      customerName: 'Kavin Nilavan',
      orderDate: '2023-08-12',
      totalAmount: 105.0,
      status: 'Delivered',
    },
    {
      orderId: 9,
      customerName: 'Kavi',
      orderDate: '2023-05-19',
      totalAmount: 475.0,
      status: 'Delivered',
    },
    {
      orderId: 10,
      customerName: 'Hema',
      orderDate: '2023-05-29',
      totalAmount: 125.0,
      status: 'Shipped',
    },
    // Add more order data as needed
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredOrders = orders.filter((order) =>
    order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='oderuh'> 
    <div className="order-history">
      <nav className="navbar3">
        {/* Add navbar content here */}
        <ul>
          <div className="logo-container">
            <img src={expresst} alt="Your Logo" />
          </div>
          <p>ORDER HISTORY</p>
          
          <li>
        <Link to="/home"><FontAwesomeIcon icon={faHome} /> {/* Home icon */}
            </Link>
          </li>
          <li>
          <Link to="/about"> <FontAwesomeIcon icon={faInfoCircle} /> {/* About Us icon */}
            </Link>
          </li>
        
          <li><Link to="/">Logout</Link></li>
          {/* Add more links or content as needed */}
        </ul>
      </nav>

      <aside className={`sidebar0 ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <FontAwesomeIcon
            icon={faBars}
            className={`toggle-icon ${sidebarOpen ? 'open' : ''}`}
          />
        </div>
        <ul>
          <li>
            <Link to="/dash" className="disline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/order" className="disline">
              Order History
            </Link>
          </li>
          <li>
            <Link to="/productlist" className="disline">
              Product Lists
            </Link>
          </li>
          <li>
            <Link to="/admin" className="disline">
              Admin Details
            </Link>
          </li>
        </ul>
      </aside>

      <h2 className="order-history-header">Order History</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Customer Name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Footer/>
    </div>

  );
};

export default OrderHistory;
