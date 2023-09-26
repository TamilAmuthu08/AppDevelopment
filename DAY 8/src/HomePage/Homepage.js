import React, { useState } from 'react';
import './Homecss.css';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/UserSlice';
import Footer from '../DashBoardPage/Footer';
import ReactPlayer from 'react-player';
import expresst from '../images/expresst.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
          <div className="logo-container">
            <img src={expresst} alt="Your Logo" />
          </div>
          <p>HOME</p>
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
      <aside className={`sidebar1 ${sidebarOpen1 ? 'open' : ''}`}>
        <div className="sidebar1-toggle" onClick={toggleSidebar}>
          <FontAwesomeIcon
            icon={faBars}
            className={`toggle-icon ${sidebarOpen1 ? 'open' : ''}`}
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
            <Link to="/productlist" className="disline">
              Admin Details
            </Link>
          </li>
        </ul>
      </aside>

      <main className="content1">
        <h2 className="content-header1">Welcome, {email}</h2>
     
        <div className="video-container">
          <ReactPlayer
            url="https://youtu.be/uIHOSzbNT8Q?feature=shared"
            width="100%"
            controls={true}
          />
        </div>
     
        <div className="cta-button"><Link to='/about'>
          <button className="btn-primary">Learn More</button></Link>
        </div>
     
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
    </main>
      <Footer />
    </div>
  );
};

export default Homepage;




