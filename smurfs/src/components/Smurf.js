import React from "react";
import {connect } from 'react-redux';

// class Smurf extends
const Smurf = props => {
  return (
    <div className="Smurf">
      <div>{props.id}</div>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

const mapStateToProps = (state) => {
    return{
        error: state.error,
        showSmurf: state.smurfsReducer
    };
};

export default connect(mapStateToProps, {})(Smurf);