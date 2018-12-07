import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurf();
  }
  render() {
    console.log(this.props.smurfs, 'in render')
    if(this.props.smurfs.length === 0) return <h1>loading...</h1>
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div>{this.props.smurfs.map(smurf => {
          return <p key={smurf.id}>{smurf.name}</p>
        })}</div>
      </div>
    );
  }
}

//export default App;
// will edit

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}
export default connect(
  mapStateToProps,
  { getSmurf }
)(App);
