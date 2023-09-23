import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Admincss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEdit } from '@fortawesome/free-solid-svg-icons';
import Dropzone from 'react-dropzone';

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const initialAdminData = {
    name: 'Admin Name',
    email: 'admin@example.com',
    profilePicture: null,
  };

  const [adminData, setAdminData] = useState(() => {
    // Retrieve admin data from localStorage or use initialAdminData if not found
    const savedAdminData = JSON.parse(localStorage.getItem('adminData'));
    return savedAdminData || initialAdminData;
  });

  useEffect(() => {
    // Save adminData to localStorage whenever it changes
    localStorage.setItem('adminData', JSON.stringify(adminData));
  }, [adminData]);

  const handleImageUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setAdminData({
      ...adminData,
      profilePicture: URL.createObjectURL(file),
    });
  };

  const handleEditAdmin = () => {
    setEditMode(true);
  };

  const handleSaveAdmin = () => {
    setEditMode(false);
    // You can send the updated admin data to the server here
  };

  return (
    <div className="admin-profile">
      <nav className="navbar5">
        <ul>
       
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li>Contact</li>
          <li>Customer Feedback</li>
        </ul>
      </nav>

      <aside className={`sidebar5 ${sidebarOpen ? 'open' : ''}`}>
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
      <div className="profile-picture">
        <Dropzone onDrop={handleImageUpload} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="round-dropzone">
              <input {...getInputProps()} />
              {adminData.profilePicture ? (
                <div className="uploaded-image-container">
                  <img
                    src={adminData.profilePicture}
                    alt={adminData.name}
                    className="uploaded-image"
                  />
                </div>
              ) : (
                <p>Drag 'n' drop a profile picture here, or click to select one</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
      <div className='arrange'>
        {editMode ? (
          <>
            <input
              className="edit-input"
              type="text"
              value={adminData.name}
              onChange={(e) => setAdminData({ ...adminData, name: e.target.value })}
              placeholder="Enter name"
            />
            <input
              className="edit-input"
              type="email"
              value={adminData.email}
              onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
              placeholder="Enter email"
            />
          </>
        ) : (
          <>
            <h2>{adminData.name}</h2>
            <p>Email: {adminData.email}</p>
          </>
        )}
        {editMode ? (
          <button className='saveadmin-button' onClick={handleSaveAdmin}>Save</button>
        ) : (
          <button className='editadmin-button' onClick={handleEditAdmin}>
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Admin;
