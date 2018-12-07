import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurf from "./Smurf";

class SmurfVillage extends Component {
  render() {
    if (!this.props.smurfs || this.props.fetchingSmurfs) {
      return <h3>Loading Smurf Village...</h3>;
    }
    return (
      <div>
        {this.props.smurfs.map(smurf => (
          <Smurf
            key={smurf.id}
            id={smurf.id}
            {...this.props}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfVillage);
