import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import EditSmurfForm from './EditSmurfForm';
import { getSmurfs, addSmurf } from '../actions'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.isFetching || !this.props.smurfs) {
      return <p>Smurfing Smurfs...</p>
    }


    return (
      <div className="App">
      <SmurfList {...this.props} />
      <br/><br/>
      <SmurfForm />
      <br/><br/>
      <EditSmurfForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  smurfs: state.smurfs,
  isFetching: state.isFetching,
  isAdding: state.isAdding,
  error: state.error,
}};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
