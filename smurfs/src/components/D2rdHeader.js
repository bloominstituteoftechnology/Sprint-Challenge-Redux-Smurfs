import React, { Component } from 'react';
import logo from './D2rdroid1.png';
import './D2rdHeader.css';

class D2rdHeader extends Component {
  render() {
    return (
      <div className="D2rdHeader">
        <h1 className="App-Title">{`D2rd Smurfs`}</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Let's go David!  Make this happen!
          </p>
          <a
            className="App-link"
            href="http://linkedin.com/in/gddaniel"
            target="_blank"
            rel="noopener noreferrer"
          >
            About David
          </a>
      </div>
    );
  }
}

export default D2rdHeader;