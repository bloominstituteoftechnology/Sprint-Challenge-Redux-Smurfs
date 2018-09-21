import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';
import { getSmurfs, addSmurfs } from '../actions';
import { connect } from "react-redux";
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
    return (
      <div className="App">
      <AddSmurf {...this.state} />
      <Smurfs {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addedSmurf: state.addedSmurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurfs })(App);
