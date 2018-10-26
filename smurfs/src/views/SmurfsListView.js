import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import Smurfs from "../components/Smurfs";
import SmurfForm from "../components/SmurfForm";
import Header from "../components/Header";
import { fetchingSmurfs, addSmurf, deleteSmurf } from "../actions";
//
class SmurfsListView extends React.Component {
  componentDidMount() {
    this.props.fetchingSmurfs();
  }

  addSmurfHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log("inListView", this.props.smurfs);
    if (this.props.fetchingFriends) {
      return (
        <div className="fetching">
          <h1>Hold On.. We're Summoning Your Crew.. </h1>
        </div>
      );
    } else {
      return (
        <div>
          <Route path="/" component={Header} />

          <Route
            exact
            path="/village"
            render={props => (
              <Smurfs
                {...props}
                smurfs={this.props.smurfs}
                deleteSmurf={this.props.deleteSmurf}
              />
            )}
          />

          <Route
            exact
            path="/smurf-form"
            render={props => (
              <SmurfForm
                {...props}
                smurfs={this.props.smurfs}
                addSmurf={this.props.addSmurf}
              />
            )}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs,
    addSmurf: state.addSmurf,
    deleteSmurf: state.deleteSmurf
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchingSmurfs,
      addSmurf,
      deleteSmurf
    }
  )(SmurfsListView)
);
