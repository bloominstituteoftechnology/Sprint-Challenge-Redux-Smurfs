import React, { Component } from 'react';
import { get, removeSmurf } from '../actions';
import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.get();
  }

  render() {
    return (
      <div className = 'App'>
        <h1>The Smurf Village</h1>
        <div>Welcome, guest!</div>

        <div className = 'container'>
          <SmurfForm />
          <div className = 'smurfs'>
            {this.props.smurfs.map(smurf => (
              <div className = 'smurf-card'>
                <p>{smurf.name} Smurf</p>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
                <button onClick = {() => this.props.removeSmurf(smurf.id)}>
                  Remove this smurf :(
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading
  };
};

export default connect(
  mapStateToProps,
  { get, removeSmurf }
)(App);
