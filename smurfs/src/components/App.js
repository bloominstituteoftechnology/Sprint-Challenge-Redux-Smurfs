import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs, addSmurf } from '../actions';

import Smurfs from '../components/Smurfs';
import SmurfForm from '../components/SmurfForm';

import './App.css';
import logo from '../logo.svg';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
      {this.props.fetchingSmurfs ? (
        <img src={logo} />
      ) : (
        <div>
            <Smurfs />
            <SmurfForm />
        </div>
      )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(App);