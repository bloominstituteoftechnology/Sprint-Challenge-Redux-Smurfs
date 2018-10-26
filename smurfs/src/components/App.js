import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs, addSmurf } from '../actions'
import { connect } from "react-redux";
import Smurfs from './Smurfs';
import AddSmurfForm from './AddSmurfForm';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  
  componentDidMount() {
    this.props.fetchSmurfs()
  };

  addSmurf = smurf => {
    this.props.addSmurf(smurf);
  };

  render() {
    console.log("Props", this.props);
    return (
      <div className="App">
        <h1>SMURFS... </h1>
        <Smurfs 
            smurfs = {this.props.smurfs}
        />

        <AddSmurfForm 
            addSmurf = {this.addSmurf}
        />

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
      smurfs : state.smurfReducer.smurfs,
      fetchingSmurfs: state.smurfReducer.fetchingSmurfs,
      error : state.smurfReducer.error
  }
}

export default connect (mapStateToProps, { fetchSmurfs, addSmurf })(App);
