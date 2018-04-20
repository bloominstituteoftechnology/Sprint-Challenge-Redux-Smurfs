import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs, createSmurfs } from "../actions/index";
import { connect } from "react-redux";
import Smurfs from './Smurfs';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  componentDidMount() {
    this.props.fetchSmurfs();
  }
  handleNewSmurf = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {/* <Smurfs smurfsList={this.props.smurfs} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.smurfs,
    error: state.error,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps, {
  fetchSmurfs,
  createSmurfs
})(App);
