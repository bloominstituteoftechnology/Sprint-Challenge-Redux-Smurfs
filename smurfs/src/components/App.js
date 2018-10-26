import React, { Component } from "react";
import "./App.css";
import { fetchSmurfs } from "../actions/index";
import { connect } from "react-redux";
import SmurfList from "./SmurfList";
import AddSmurfForm from "./AddSmurf";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>v a p o r s m u r f</h1>

        <AddSmurfForm />

        {/* map over smurfs with list component  */}
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetching: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(App);
