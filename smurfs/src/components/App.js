import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import Smurfs from "./Smurfs"
import { getSmurfs } from "../actions"
import SmurfForm from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }
  render() {
    return (
      <div className="App">
       {this.props.fetching ? <h2>Fetching Smurfs</h2> : this.props.smurfs.map((smurf, index) => (
         <Smurfs smurf={smurf} key={index} />
       ))}
       <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs:  state.smurfs,
    fetching: state.fetchingSmurfs,
    err: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(App)

// const initialState = {
//   smurfs: [],
//   fetchingSmurfs: false,
//   addingSmurf: false,
//   updatingSmurf: false,
//   deletingSmurf: false,
//   error: null
// };
