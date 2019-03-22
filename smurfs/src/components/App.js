import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { FETCH_SMURF, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: {
      name: '',
      age: null,
      height: ''
      }
    }
  }

componentDidMount() {
  console.log('CDM now running');
    axios
      .get (`http://localhost:3333/smurfs`)
      .then(response => {
        console.log(response);
        this.setState({ 
          smurfs: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }








  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to Smurfs Village Redux!</div>
        <div>Have fun!</div>

        <p> button </p>


      </div>
    );
  }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error
});

export default connect(mapStateToProps, 
  { FETCH_SMURF, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE }
) (App);
