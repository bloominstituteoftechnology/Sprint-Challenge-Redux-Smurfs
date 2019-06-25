import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const AddSmurfForm = ({ addSmurf }) => (
  <form onSubmit={addSmurf}>
    <input type="text" placeholder="name" name="name" />
    <input type="text" placeholder="age" name="age" />
    <input type="text" placeholder="height" name="height" />
    <button type="submit">add smurf</button>
  </form>
);

export default connect(
  () => ({}),
  { addSmurf }
)(AddSmurfForm);
