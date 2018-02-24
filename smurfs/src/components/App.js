import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import AddSmurf from './AddSmurf';
import SmurfList from './SmurfList';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurf />
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    gettingSmurfs: state.gettingSmurfs,
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
