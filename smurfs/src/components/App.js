import React, { Component } from 'react';
import './App.css';
import SmurfsListView from '../Views/SmurfsListView';
import SubmitNewSmurfView from '../Views/SubmitNewSmurfView';

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
