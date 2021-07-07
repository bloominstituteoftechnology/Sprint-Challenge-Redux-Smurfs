import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import CreateSmurf from './CreateSmurf';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Smurf Village!</h1>
        <img src="http://www.wallsticker.top/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/t/h/the_smurfs3532_1.jpg" 
        className="smurf-image"
        alt='A Smurf'
        />
        <CreateSmurf />
        <Smurfs />
      </div>
    );
  }
}

export default App;
