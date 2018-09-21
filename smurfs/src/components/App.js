import React, { Component } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(`Current State on App.js ${this.props.smurfs}`);
    return (
      <div className="App">
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                className={smurf.name}
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
              />
            );
          })}
        </ul>
        <SmurfForm />
        <p />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfReducer.smurfs,
  fetching: state.smurfReducer.fetching,
  error: state.smurfReducer.error
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
