import React from 'react';
import AddSmurfButton from '../AddSmurfButton/AddSmurfButton';

const Header = props => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <AddSmurfButton />
    </header>
  );
}

export default Header;