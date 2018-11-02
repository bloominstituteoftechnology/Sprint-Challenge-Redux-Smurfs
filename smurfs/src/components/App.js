import React, { Component } from 'react'
import './App.css';
import AddForm from './AddForm';
import Village from './Village';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <AddForm />
        <Village />
      </div>
    )
  }
}

export default App;