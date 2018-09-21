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
      <div className="App">
        <h1>Welcome to our Village!</h1>
        <div>We hope you enjoy your stay!</div>

        <div className="page">
          <SmurfForm />
          <div className="smurfs">
            {this.props.smurfs.map(smurf => (
              <div className="smurf-card">
                <p>{smurf.name}</p>
                <p>Age: {smurf.age}</p>
                {console.log(smurf.id)}
                <p>Height: {smurf.height}</p>
                <button onClick={() => this.props.removeSmurf(smurf.id)}>
                  Goodbye!
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
