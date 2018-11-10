import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
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
      return <h2>{this.props.message}</h2>;
    } else if (this.props.error !== null) {
      return <h2>{this.props.error}</h2>;
    } else {
      return <Smurfs />;
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
