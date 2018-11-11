import React, { Component } from 'react';
import logo from './D2rdroid1.png';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-Title">{`D2rd Smurfs`}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        
        <div>Welcome to D2rd's Redux version of Smurfs!</div>
        <div>Let's go David!  Make this happen!</div>
        <a
            className="App-link"
            href="http://linkedin.com/in/gddaniel"
            target="_blank"
            rel="noopener noreferrer"
            >
            About David
          </a>
            <div>Start inside of your `src/index.js` file!</div>
      </div>
    );
  }
}

export default App;
