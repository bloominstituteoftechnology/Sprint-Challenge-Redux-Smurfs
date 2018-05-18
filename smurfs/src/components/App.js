import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchingSmurfs } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchingSmurfs();
  }
  render() {
    return (
      <div className="App container">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className="container">
          Welcome to your Redux version of Smurfs!
        </div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <br />
        <br />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps, {fetchingSmurfs})(App);
