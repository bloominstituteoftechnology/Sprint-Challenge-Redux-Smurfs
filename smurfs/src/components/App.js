import React, { Component } from 'react';
import './App.css';
import  { fetchingSmurfs } from '../actions';
import { connect } from 'react-redux';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchingSmurfs();
  }
  render() {
    if(this.props.fetchingSmurfs) {
      <h2>Getting Smurfs....</h2>
    }
    return (
      <div className="App">
        <h1>SMURFS Redux Village</h1>
        {this.props.smurfs.map(smurf => {
          return(
            <p key={smurf.id + 1}>
              {smurf.name}
            </p>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  { fetchingSmurfs }
)(App);