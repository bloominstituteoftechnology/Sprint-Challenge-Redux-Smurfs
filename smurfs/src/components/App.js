import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import SmurfNav from "./SmurfNav";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.loading === true) {
      return (
        <div className="App">
          <SmurfNav />
          <h2>{this.props.message}</h2>
        </div>
      );
    } else if (this.props.error !== null) {
      return (
        <div className="App">
          <SmurfNav />
          <h2>{this.props.error}</h2>
        </div>
      );
    } else {
      return (
        <div className="App">
          <SmurfNav />
          <Route exact path="/" component={Smurfs} />
          <Route path="/smurf-form" component={SmurfForm} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.fetchingSmurfs,
    message: state.message,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
