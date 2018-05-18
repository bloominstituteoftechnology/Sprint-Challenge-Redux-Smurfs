import React, { Component } from 'react';
// Components
import CreateSmurfForm from './CreateSmurfForm';
// Redux
import { connect } from 'react-redux';
// Redux--ACTIONS
import { getSmurfs } from '../actions';
import './App.css';
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
  displaySmurfs() {
    return this.props.smurfs.map(obj => {
      console.log("APP--displaySmurfs-obj",obj);
      const { name, age, height, id } = obj;
      return <p key={id}>Hi, I'm {name} smurf. I'm {age} years old and {height} high!</p>; 
    });
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <hr />
        <CreateSmurfForm />
        { this.displaySmurfs() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("APP--mapStateToProps-state",state);
  return {
    smurfs: state.smurfs,
  }
};

export default connect(mapStateToProps, { getSmurfs })(App);
