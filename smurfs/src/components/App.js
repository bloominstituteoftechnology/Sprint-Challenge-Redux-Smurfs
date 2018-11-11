import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
import Navbar from './Navbar';
import About from './About';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <Navbar branding ="Redux Smurfs"/>
      <SmurfForm />
      <div className="container">
        <switch>
            <Route exact path='/' component={Smurfs} />
            <Route exact path='/about' component={About} />
        </switch>
      </div>
      </div>
    );
  }
}

export default App;
