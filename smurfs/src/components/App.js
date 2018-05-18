import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { AddSmurf, SmurfList } from "./";


class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs();
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
  const { rootReducer } = state
  return rootReducer
}

export default connect(mapStateToProps, { ACTIONS })(App);
