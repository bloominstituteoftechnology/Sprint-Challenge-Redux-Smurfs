import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import './App.css';
import SmurfsListView from '../Views/SmurfsListView';
import SubmitNewSmurfView from '../Views/SubmitNewSmurfView';
// import EditSmurfView from '../Views/EditSmurfView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SubmitNewSmurfView />
        <SmurfsListView />
      </div>
    );
  }
} 

export default App;
