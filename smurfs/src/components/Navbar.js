import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SmurfsImage from '../img/SmurfsImage.png';

const Navbar = (props) => {
    const {branding} = props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
        <div className="container">
        <span><img src= {SmurfsImage} height="80px" width="250" alt="Smurfs Image"></img>
            <a href="/" className="navbar-brand" style={{fontSize:'36px'}}>{branding}</a></span>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link to="/" className="nav-link">< i className="fas fa-home mr-2"></i>Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">< i className="fas fa-question mr-2"></i>About</Link></li>
          </ul>
        </div>
      </nav>
          
    )
}

export default Navbar;