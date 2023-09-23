import * as React from 'react';
import './Logincss.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/UserSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = React.useState({
    username: "",
    password: ""
  });

  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value
    });
  };

  const submitLoginForm = (e) => {
    e.preventDefault();
    if (!loginFormData.username || !loginFormData.password) {
      console.log("Please enter details");
    } else {
      console.log(loginFormData);
      dispatch(login({ // Assuming you have an action creator called loginAction
        username: loginFormData.username,
        password: loginFormData.password
      }));
      navigate('/home');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        <form onSubmit={submitLoginForm}>
          <div className="form-group1">
            <label className="label">Email:</label>
            <input
              type="email"
              name="username" // Match the name with the state property
              className="input-field"
              autoComplete="current-username"
              onChange={handleLoginFormChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group2">
            <label className="label">Password:</label>
            <input
              type="password"
              name="password" // Match the name with the state property
              className="input-field"
              autoComplete="current-password"
              onChange={handleLoginFormChange}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="form-footer">
          Don't have an account? <Link to="/signup" className="line2">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
