import React, { Component } from 'react';
import { createSmurf } from '../actions/index';
import { getSmurfs } from '../actions/index';
import { connect } from 'react-redux';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
      <ul>
        {this.props.smurfs.map(smurf => {
          return (
          <li key={smurf.id}>
          <p>{smurf.name}</p>
          <p>{smurf.age}</p>
          <p>{smurf.height} </p>
          </li>
        );
        })}
      </ul>

        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);
