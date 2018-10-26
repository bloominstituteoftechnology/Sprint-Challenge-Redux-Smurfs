import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../actions';
import './App.css';
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
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {this.props.smurfs.map((smurf) => {
          return (
            <div key={smurf.id}>
              <h3>{smurf.name}</h3>
              <p>age: {smurf.age}</p>
              <p>height: {smurf.height}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('STATE', state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(App);
