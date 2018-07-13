import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="home-link"><Link to="/">Home</Link></div>
      <div className="header-title"><h2>WELCOME TO SMURF VILLAGE</h2></div>
      <div className="add-smurf-link"><Link to="/smurfs/add">Add smurf</Link></div>
    </div>

  )
}

export default Header;
