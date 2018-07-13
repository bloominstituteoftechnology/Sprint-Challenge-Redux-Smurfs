import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { fetchSmurfs } from "../actions";

// components
import Loading from "./Loading";
import Error from "./Error";
import SmurfsList from "./SmurfsList";
import AddSmurfForm from "./AddSmurfForm";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    let URL = "http://localhost:3333/smurfs/";
    this.props.fetchSmurfs(URL);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Loading fetchingSmurfs={this.props.fetchingSmurfs} />
        <Error error={this.props.error} />
        <SmurfsList smurfs={this.props.smurfs} />
        <AddSmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    smurfsFetched: state.smurfsFetched,
    error: state.error,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSmurfs
  }
)(App);
