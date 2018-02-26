import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from './actions/index.js';
import SmurfVillage from './components/SmurfVillage.js';
import SmurfForm from './components/SmurfForm.js';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    const { smurfs } = this.props;
    return (
      <div>
        {this.props.fetchingSmurfs ? <h1>Loading Smurfs</h1> : <h1>'Smurf Village'</h1>}
        <SmurfForm />
        <SmurfVillage smurfs={smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
