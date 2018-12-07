import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurf from "./Smurf";
import styled from "styled-components";

const Village = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-around;
`;

class SmurfVillage extends Component {
  render() {
    if (!this.props.smurfs || this.props.fetchingSmurfs) {
      return <h3>Loading Smurf Village...</h3>;
    }
    return (
      <Village>
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
      </Village>
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
