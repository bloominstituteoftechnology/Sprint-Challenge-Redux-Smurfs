import React from 'react';
import AddSmurfButton from '../AddSmurfButton/AddSmurfButton';
import './Header.css';

const Header = props => {
  return (
    <header className="header">
      <h1>
        {(props.image !== null) ? <img src={props.image} className="img-fluid" alt={props.title}/> : props.title}
      </h1>
      <AddSmurfButton />
    </header>
  );
}

export default Header;