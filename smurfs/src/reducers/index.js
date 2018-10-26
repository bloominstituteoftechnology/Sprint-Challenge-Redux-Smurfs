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
      return {...state, fetchingSmurfs:true}
    case SMURFS_FETCHED:
      return {...state, fetchingSmurfs:false, smurfs:payload}
    case ADDING_SMURF:
      return {...state, addingSmurf:true};
    case SMURF_ADDED:
      return {...state, addingSmurf:false, smurfs:payload};
    case COLOSSAL_SMURF_UP:
      return {...state, error:payload};
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
