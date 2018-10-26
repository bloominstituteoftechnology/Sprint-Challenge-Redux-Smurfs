import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  ADDING_SMURF,
  SMURF_ADDED,
  COLOSSAL_SMURF_UP
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const smurfReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHING_SMURFS:
      return state;
    case SMURFS_FETCHED:
      return state;
    case ADDING_SMURF:
      return state;
    case SMURF_ADDED:
      return state;
    case COLOSSAL_SMURF_UP:
      return state;
    default:
      return state;
  }
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
