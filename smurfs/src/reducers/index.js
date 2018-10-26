/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADDING_SMURF,
  ADDING_SMURF_SUCCESS,
  ADDING_SMURF_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case FETCHING_SMURFS_SUCCESS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };
    case FETCHING_SMURFS_FAILURE:
      return { ...state, fetchingSmurfs: false, error: action.payload };
    case ADDING_SMURF:
      return { ...state, addingSmurf: true };
    case ADDING_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload, addingSmurf: false };
    case ADDING_SMURF_FAILURE:
      return { ...state, error: action.payload, addingSmurf: false };
    default:
      return state;
  }
};

export default rootReducer;
