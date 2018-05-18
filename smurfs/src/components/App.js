import React, { Component } from 'react';
import './App.css';
import { AddSmurf, SmurfList } from "./";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";



class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <AddSmurf />
        <SmurfList {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state
}

export default connect(mapStateToProps, { getSmurfs })(App);
