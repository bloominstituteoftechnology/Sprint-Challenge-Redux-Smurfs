import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { fetchData } from '../actions';
import SmurfList from './SmurfList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    // console.log(this.props);
    if (this.props.fetchingSmurfs) return <h2>Loading Data...</h2>;
    return (
      <div className="App">
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(App);
