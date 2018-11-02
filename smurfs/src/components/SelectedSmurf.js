import React from "react";
import { connect } from "react-redux";
import { toggleUpdateSmurf } from "../actions/index";
import UpdateSmurfForm from "./UpdateSmurfForm";

const SelectedSmurf = function(props) {
  return (
    <div>
      <h4>{props.selected.name}</h4>
      <span onClick={() => props.handleShowSmurf({})}> X </span>
      <div>{props.selected.height}</div>
      <div>{props.selected.age}</div>
      <button onClick={() => props.toggleUpdateSmurf()}>Update</button>
      {props.showUpdate ? <UpdateSmurfForm id={props.selected.id} /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  const { singleSmurfReducer } = state;
  return {
    showUpdate: singleSmurfReducer.showUpdate
  };
};

export default connect(
  mapStateToProps,
  { toggleUpdateSmurf }
)(SelectedSmurf);
