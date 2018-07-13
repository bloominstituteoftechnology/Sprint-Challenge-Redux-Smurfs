import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchReq, submitReq, deleteReq, updateReq } from '../actions';
import Smurfs from '../components/Smurfs';
import SmurfForm from '../components/SmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    this.props.fetchReq();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div></div>
        <Smurfs />
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    
  };
};

export default connect(mapStateToProps, { fetchReq, submitReq, deleteReq, updateReq })(App);
