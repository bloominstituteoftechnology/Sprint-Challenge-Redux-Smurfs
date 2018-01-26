/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  ERROR_FETCHING_SMURFS,
  CREATING_SMURF,
  CREATE_SMURF_SUCCESS,
  CREATE_SMURF_FAILURE,
  DELETING_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from '../actions'

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export const smurfsReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return {
        ...state, fetchingSmurfs: true
      };
    case SMURFS_FETCHED:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case ERROR_FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case CREATING_SMURF:
      return {
        ...state, addingSmurf: true,
      };
    case CREATE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
      };
    case CREATE_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    case DELETING_SMURF:
      return {
        ...state, deletingSmurf: true,
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: false,
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};
