import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getSmurfs } from '../actions';
import Smurf from './Smurf';
import AddSmurfForm from './AddSmurfForm';


class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        { this.props.fetchingSmurfs ? <h2>Loading</h2> : null }
        { this.props.error !== '' ? <h1>{this.props.error}</h1> : null }
        <AddSmurfForm />
        <h2>Smurf Village List</h2>
        { this.props.smurfs.map( (smurf, i) => <Smurf smurf={smurf} key={smurf.id} /> ) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(mapStateToProps, { getSmurfs })(App);
