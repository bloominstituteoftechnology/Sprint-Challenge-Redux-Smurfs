import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

 import { fetchSmurfs } from '../actions/index';
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Here's the smurf Village</div>
        <ul>
          {this.props.smurfs.map(smurf => {
            return <li key={smurf.id}>{smurf.name}</li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchSmurfs: state.fetchSmurfs
  }; 
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
