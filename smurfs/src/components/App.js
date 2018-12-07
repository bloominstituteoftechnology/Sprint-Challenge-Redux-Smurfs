import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {getSmurfs,deleteSmurf} from "../actions";
import SmurfList from "./SmurfList";
import Form from "./Form"


class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }

  deleteHandler = (event,id) => {
    event.preventDefault();
    this.props.deleteSmurf(id);
  }

  render() {
    return (
      <div className="App">
        <h1>Smurfs</h1>
        <Form />
        <SmurfList delete={this.deleteHandler} smurfs={this.props.smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    smurfs:state.smurfs,
    fetching:state.fetching,
    error:state.error
  }
}

export default connect(mapStateToProps,{getSmurfs,deleteSmurf})(App);
