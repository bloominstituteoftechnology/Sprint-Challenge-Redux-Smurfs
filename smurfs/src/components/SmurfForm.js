import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/";

const SmurfForm = ({ dispatch }) => {
  let name, age, height;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch(addSmurf(name.value, age.value, height.value));
        name.value, age.value, height.value = "";
      }}>
      <input
        className="input-name"
        type="text"
        ref={node => (name = node)}
        placeholder="name"
      />
      <input
        className="input-age"
        type="text"
        ref={node => (age = node)}
        placeholder="age"
      />
      <input
        className="input-height"
        type="text"
        ref={node => (height = node)}
        placeholder="height"
      />
      <button>Add Smurf</button>
    </form>
  );
};

export default connect()(SmurfForm);