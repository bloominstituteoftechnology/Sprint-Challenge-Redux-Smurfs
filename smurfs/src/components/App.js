import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';
import { fetchSmurfs } from '../actions';
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
    return (
      <div className="App">
        {this.props.fetchingSmurfs ? <Smurfs /> : <h1>Fetching Smurfs ...</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { fetchingSmurfs: state.fetchingSmurfs };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(App);
