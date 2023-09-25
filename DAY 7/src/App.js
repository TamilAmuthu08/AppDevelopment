import React from 'react';
import './App.css';
import Login from './LoginPage/Login';
import Signup from './SignupPage/Signup';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './DashBoardPage/DashBoard';
import OrderHistory from './DashBoardPage/OrderHistory';

import ProductList from './DashBoardPage/ProductList';
import About from './AboutPage/About';
import Homepage from './HomePage/Homepage';
import Admin from './AdminProfile/Admin';
import Footer from './DashBoardPage/Footer';
import Privacy from './DashBoardPage/Privacy';
import LandingPage from './LandPage/Land';

import Appone from './trial/Appone';
import TermsAndConditions from './DashBoardPage/Terms';
import FAQ from './DashBoardPage/Faq';






function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/order" element={<OrderHistory/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/land" element={<LandingPage/>} />
        <Route path="/" element={<Appone/>} />
        <Route path="/term" element={<TermsAndConditions/>} />
        <Route path="/faq" element={<FAQ/>} />
    
       
  
      
        <Route path="/productlist" element={<ProductList/>} />
     
      </Routes>
    </Router>
    
      </header>
    </div>
  );
}

export default App;
