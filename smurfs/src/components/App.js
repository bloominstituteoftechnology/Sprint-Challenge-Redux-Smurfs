import React, { Component } from 'react';
import './App.css';
import SmurfList from '../components/Smurfs'
import SmurfForm from '../components/SmurfForm'

class App extends Component {

  render() {
    return (
      <div className="App">
           <SmurfList/> 
           <SmurfForm />
        
      </div>
    );
  }
}

export default App;
