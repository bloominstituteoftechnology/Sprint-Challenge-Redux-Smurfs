import React, { Component } from 'react';
import './App.css';
import SmurfsForm from './SmurfsForm/SmurfsForms';

import { connect } from 'react-redux';
import { fetching_data } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetching_data();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <SmurfsForm />
        <ul>
          {this.props.smurfs.map(smurf => {
            return <li key={smurf.name} className="smurf-item">
              <div className="smurf-name">{`name: ${smurf.name}`}</div>
              <div className="smurf-age">{`age: ${smurf.age}`}</div>
              <div className="smurf-height">{`height: ${smurf.height}`}</div>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      fetchingSmurfs: state.smurfsReducer.fetchingSmurfs,
      smurfs: state.smurfsReducer.smurfs,
  }
}

export default connect(mapStateToProps, { fetching_data })(App);
