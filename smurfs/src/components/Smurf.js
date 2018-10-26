import React from "react";
import { connect } from "react-redux";

const Smurf = props => {
  return (
    <div className="container">
      <div className="smurf">
        <div className="smurf__row">
          <h2 className="smurf__specification">Name:</h2>
          <h2 className="smurf__detail">{props.name}</h2>
        </div>

        <div className="smurf__row">
          <h2 className="smurf__specification">Age:</h2>
          <h2 className="smurf__detail">{props.age}</h2>
        </div>

        <div className="smurf__row">
          <h2 className="smurf__specification">Height:</h2>
          <h2 className="smurf__detail">{props.height}</h2>
        </div>
      </div>
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
