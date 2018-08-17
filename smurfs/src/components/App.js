import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import AddSmurfForm from './AddSmurfForm';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Smurfs 2.0 w/ Redux</h1>
          <ul>
          {this.props.smurfs.map(smurf =><li>Name: {smurf.name}, Age: {smurf.age}, Height: {smurf.height}</li>)}
          </ul>
          <AddSmurfForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
