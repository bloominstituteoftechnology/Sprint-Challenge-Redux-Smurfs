import React from "react";
import { connect } from "react-redux";

const Smurf = props => {
  return (
    <div className="smurf">
      <h2 className="smurf__detail">Name:</h2>
      <h2 className="smurf__name">{props.name}</h2>

      <h2 className="smurf__detail">Age:</h2>
      <h2 className="smurf__age">{props.age}</h2>

      <h2 className="smurf__detail">Height:</h2>
      <h2 className="smurf__height">{props.height}</h2>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(Smurf);
