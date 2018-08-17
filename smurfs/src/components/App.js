import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const url = 'http://localhost:3333/smurfs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age:'',
      height: ''
    };
  }

componentDidMount() {
  axios
  .get(url)
  .then((response)=>this.setState({smurfs: response.data}))
  .catch(error => console.log(error))
}

handleSubmit = data => this.setState({smurfs: data});


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <div>
          <Smurfs 
          smurfs = {this.state.smurfs}
          />

          <SmurfForm 
          handleSubmit = {this.handleSubmit} 
          />

        </div>
      </div>
    );
  }
}

export default App;
