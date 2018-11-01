import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

class SmurfsList extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div>
        {this.props.error ? <div>404 Oh Snap</div> : null}
        {this.props.fetchingFriends ? <div>Loading...</div> : null}
        <ul>
          {this.props.smurfs.map(smurf => {
            return <li key={smurf}> {smurf.name} </li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfsList);
