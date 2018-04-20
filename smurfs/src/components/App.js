import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addSmurf, updateSmurf, deleteSmurf } from '../actions';
import './App.css';
import { SmurfCard } from './SmurfCard';
import { SmurfForm } from './SmurfForm';

class App extends Component {
  constructor(props) {
    super(props);
    // Set form state here to be shared amongst components
    this.state = { 
      name: '', age: '', height: '' 
    }
  }
  // Initial retrieval from server
  componentDidMount() {
    this.props.getSmurfs();
  }
  // Handle update of user input and translate to state
  updateInputState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  // Reset form upon submission
  resetInputForm = () => {
    this.setState({ name: '', age: '', height: '' });
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {/* Map over smurfs data and create a card for each smurf */}
        {/* Connect with state and pass down necessary functions */}
        {this.props.smurfs.map(smurf => (
          <SmurfCard 
            key={smurf.id}
            smurf={smurf}
            formInput={this.state}
            resetInputForm={this.resetInputForm}          
            deleteSmurf={this.props.deleteSmurf}
            updateSmurf={this.props.updateSmurf}
          />
        ))}
        {/* Create form that can see App state and handle add functionality */}
        <SmurfForm 
          formInput={this.state}
          resetInputForm={this.resetInputForm} 
          updateInputState={this.updateInputState}
          addSmurf={this.props.addSmurf} 
        />
        <p className="updateInfo">To update a smurf you must input data 
        <br/>into the form field and then hit update on
        <br/>the smurf that you would like to update</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurfs: state.deletingSmurfs,
    error: state.error
  }
}

const mapDispatchToProps = () => {
  return {
    getSmurfs,
    addSmurf,
    updateSmurf,
    deleteSmurf
  };
};

// Set all state derived from redux onto props of our App componenet
export default connect(mapStateToProps, mapDispatchToProps())(App);
