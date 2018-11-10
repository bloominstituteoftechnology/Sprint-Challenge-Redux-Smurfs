import React from "react";
import { connect } from "react-redux";
import { toggleUpdateSmurf } from "../actions/index";
import UpdateSmurfForm from "./UpdateSmurfForm";

 const SelectedSmurf = function(props) {
  return (
    <div className="selected-smurf">
      <h4>{props.selected.name}</h4>
      <span className="hide-smurf" onClick={() => props.handleShowSmurf({})}> Hide Smurf </span>
      <div className="divider">{props.selected.height} CM</div>
      <div>{props.selected.age} Years Old</div>
      <button className="update-button" onClick={() => props.toggleUpdateSmurf()}>Update</button>
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