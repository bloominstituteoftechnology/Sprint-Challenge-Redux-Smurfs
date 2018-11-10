import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetch, addSmurf, removeSmurf } from '../actions';
import Smurfs from './Smurfs.js';
import Forms from './Forms.js';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount()   {
      this.props.fetch()
  }
  render() {
    return (
      <div className="App">
        {this.props.fetching === true ? (<h1>LOADING</h1>) : <Smurfs removeSmurf={this.props.removeSmurf} smurfs={this.props.smurfs}/>}
        <Forms addSmurf={this.props.addSmurf}/>
      </div>
    );
  }
}

const mapStateToProps   =   state   =>  {
    return {
        smurfs: state.smurfReducer.smurfs,
        fetching: state.smurfReducer.fetching,
        error: state.smurfReducer.error
    }
}
export default connect(
  mapStateToProps,
  { fetch,
    addSmurf,
    removeSmurf }
)(App);
