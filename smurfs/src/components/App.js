import React, { Component } from 'react';
import './App.css';
/*
  to wire this component up you're going to need a few things.
  I'll let you do this part on your own. 
  Just remember, `how do I `connect` my components to redux?`
  `How do I ensure that my component links the state to props?`
 */

import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class App extends Component {

componentDidMount() {
  this.props.getSmurfs();
}

  render() {
    return (
      <div className="App">
        {this.props.fetchingSmurfs ? <h2>Loading...</h2> : null }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
});

export default connect(mapStateToProps, { getSmurfs })(App);
