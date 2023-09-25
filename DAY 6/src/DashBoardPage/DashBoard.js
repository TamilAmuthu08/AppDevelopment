import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DashBoardcss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import expresst from'../images/expresst.png';

import { Pie ,Bar} from 'react-chartjs-2';
import 'chart.js/auto';

const DashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const pieChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9900',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9900',
        ],
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    radius: '80%', // Increase the radius to make the chart larger
    animation: {
      animateRotate: true, // Enable rotation animation
      animateScale: true, // Enable scale animation
    },
    plugins: {
      tooltip: {
        enabled: true,
        animation: {
          duration: 200,
        },
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            if (label) {
              return label + ': ' + context.parsed + '%';
            }
            return '';
          },
        },
      },
    },
  };
  const barChartData = {
    labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: '#36A2EB',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.7)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: [65, 59, 80, 81, 56], // Sample data for the bar chart
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='dashuh'>
    <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <nav className="navbar">
        <ul>
        <div className="logo-container">
          <img src={expresst} alt="Your Logo" />
        </div>
      <p>DASHBOARD</p>
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
      <div class="sidebar-content">

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
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
            </div>

      <div className="content">
 
        <header className="dashboard-header">
          <h1>Custom T-Shirt Printing Dashboard</h1>
        </header>
        <section className="metrics">
          <div className="metric">
            <h2>Total Orders</h2>
            <p>10,000</p>
          </div>
          <div className="metric">
            <h2>Total Revenue</h2>
            <p>5%</p>
          </div>
          <div className="metric">
            <h2>Pending orders</h2>
            <p>0</p>
          </div>
          <div className="metric">
            <h2>Completed orders</h2>
            <p>10,000</p>
          </div>
        </section>

        <div className="pie-chart-container" style={{ width: '550px', height: '500px' }}>
          {/* Increase the width and height of the container */}
          <Pie data={pieChartData} options={pieChartOptions} />
        <div className="bar-chart-container" style={{ width: '400px', height: '400px' }}>
          <Bar data={barChartData} options={barChartOptions} />
        </div>
        </div>
      </div>

 
    </div>
      <Footer />
    </div>
  );
};

export default DashBoard;
