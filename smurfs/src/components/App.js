import React, { Component } from 'react';
import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux';
import Smurf from './Smurf';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs()
;  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
      
        {this.props.smurfs.map(eachSmurf => <Smurf key={eachSmurf.id} smurfName = {eachSmurf} /> )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('this state',state);
  return {
    //providing new props, so in App component, thatis the props we want to reference
    smurfs: state.smurfs,
    fetchSmurfs: state.fetchingSmurfs,

  }
}
//specify which data we are listening to
export default  connect(mapStateToProps, { fetchSmurfs }) (App);
