import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {getSmurfs, addSmurf, updateSmurf, deleteSmurf} from '../actions';
import './App.css';



class App extends Component {

  componentDidMount () {
    this.props.getSmurfs(); 
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state) // for now delete later.. 
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error,
  }
}



export default connect(mapStateToProps, {getSmurfs,addSmurf, updateSmurf,deleteSmurf})(App);
