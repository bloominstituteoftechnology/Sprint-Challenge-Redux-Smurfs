/*
  Be sure to import in all of the action types from `../actions`
*/
import React, { Component } from "react";

import * as ActType from "../actions/actionTypes";
import { connect } from "react-redux";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
};

const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActType.FETCHING_SMURF:
      return Object.assign({}, state, { fetchingSmurfs: true });

    case ActType.ADDING_SMURF:
      return Object.assign({}, state, { addingSmurf: true });

    case ActType.UPDATING_SMURF:
      return Object.assign({}, state, { updatingSmurf: true });

    case ActType.DELETING_SMURF:
      return Object.assign({}, state, { deletingSmurfs: true });

    case ActType.SUCCESS_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurfs: false,
        error: null,
        smurfs: [...action.payload]
      });

    case ActType.ERROR_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurfs: false,
        error: action.payload
      });

    default:
      return state;
  }
};

export default smurfsReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
