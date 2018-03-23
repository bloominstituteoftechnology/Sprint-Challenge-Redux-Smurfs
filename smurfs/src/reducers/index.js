import {
  FETCHING_SMURF,
  FETCHED_SMURF,
  ERROR_FETCHING_SMURF
} from "../actions";
import { SAVING_SMURF, SMURF_SAVING, ERROR_SAVING_SMURF } from "../actions";
/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurf: false,
  savingSmurf: false,
  error: null
};
/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: null
 }
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF:
      return { ...state, fetchingSmurf: true };
    case ERROR_FETCHING_SMURF:
      return { ...state, error: action.errorMessage };
    case FETCHED_SMURF:
      return {
        ...state,
        fetchingSmurf: true,
        smurfs: action.smurfs,
        error: null
      };
    case SAVING_SMURF:
      return { ...state, savingSmurf: true };
    case ERROR_SAVING_SMURF:
      return { ...state, error: action.errorMessage };
    case SMURF_SAVING:
      return {
        ...state,
        savingSmurf: false,
        smurfs: action.smurfs
      };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
