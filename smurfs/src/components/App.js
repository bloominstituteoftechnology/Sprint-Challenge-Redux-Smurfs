import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import NewSmurfForm from './NewSmurfForm';
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
    if (this.props.fetching) {
      return (
        <div className="App">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      if (this.props.error) {
        return (
          <div className="App">
            <h1>{this.props.error}</h1>
          </div>
        );
      }
      return (
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <NewSmurfForm />
          {this.props.smurfs.map(smurf => {
            return (
              <div className="smurf" key={smurf.id}>
                <p>Name: {smurf.name}</p>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
