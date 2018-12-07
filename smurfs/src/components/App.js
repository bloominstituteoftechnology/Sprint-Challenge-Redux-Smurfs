import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {getSmurfs} from "../actions";
import SmurfList from "./SmurfList";
import Form from "./Form"


class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>Smurfs</h1>
        <Form />
        <SmurfList smurfs={this.props.smurfs}/>
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

export default connect(mapStateToProps,{getSmurfs})(App);
