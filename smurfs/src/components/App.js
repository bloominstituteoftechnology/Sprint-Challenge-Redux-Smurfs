import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Smurf from './Smurf';
import { fetchSmurfs } from '../actions';
import SmurfForm from './SmurfForm.js';


/*
  To wire this component up you're going to need a few things.
  I'll let you do this part on your own. 
  Just remember, `how do I `connect` my components to redux?`
  `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  
  componentDidMount() { // Triggers our action.
    this.props.fetchSmurfs(); // Calls the fetchSmurfs function.
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Welcome to the Land of the Smurfs!</h1>
        </div>
      {/* Creates a SmurfForm. */}
      <SmurfForm />
      {/* pass smurfs down into a component and iterate over that list of data */}
      {this.props.smurfs.map((smurf, index) => { // For each Smurf.
        return <Smurf key={index} smurf={smurf} />; // Create a Smurf component that passes down all of the smurf data.
      })}
      </div>
    );
  }
}

const mapStateToProps = state => { // Builds mapStateToProps function.
  return { // Returns the state we want our App to be concerned with.
    fetchSmurfs: state.fetchingSmurfs, // State of fetching Smurfs.
    smurfs: state.smurfs // State of Smurfs.
  };
};

export default connect(mapStateToProps, {fetchSmurfs})(App); // Connect to fetchSmurfs.