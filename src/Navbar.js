import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'; 
import logoImg from './logo.png';


const Navbar = () => {
  return (
    <div>
  <div className="navbar">
      <div className="logo-container">
        <img src={logoImg} alt="Logo" className="logo" />
        <span className="title">ResolveHub</span>
      </div>
      <div className="center-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="left-links">
        <Link to="/login" className="login">Login</Link>
        <Link to="/signup" className="signup">Signup</Link>
      </div>
    </div>

    </div>
  )
}

export default Navbar
