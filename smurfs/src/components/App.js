import React, { Component } from 'react';
import SmurfsContainer from '../container/SmurfsContainer';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
            <div className="appheader">
                <h1>WELCOME TO SMURFDOM!</h1>
            </div>
      <div >
            <SmurfsContainer className="smurfs-container"/>
      </div>
      </div>
    );
  }
}

