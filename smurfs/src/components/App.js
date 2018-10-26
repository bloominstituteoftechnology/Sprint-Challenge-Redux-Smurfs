import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

//Component Imports
import SmurfList from './smurfList'
import SmurfForm from './SmurfForm'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
export class App extends Component {

  componentDidMount(){
    this.props.getSmurfs();
  }

  handleInputChange = e => {
    this.setState({[event.target.name]:event.target.value})
  }

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <SmurfList smurfs={this.props.smurfList}/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log("MAP STATE TO PROPS : ",state);
  return {
    smurfList : state.smurfs,
    newSmurf : state.newSmurf,
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
