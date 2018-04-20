/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  SMURFS_FETCHING,
  SMURFS_FETCHED,
  SMURF_ADDING,
  SMURF_ADDED,
  SMURF_ERROR
} from "../actions";

const initialSmurfs = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurfs: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = initialSmurfs, action) => {
  switch (action.type) {
    case SMURFS_FETCHING:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case SMURFS_FETCHED:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case SMURF_ADDING:
      return {
        ...state,
        addingSmurf: true
      };
    case SMURF_ADDED:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      };
    case SMURF_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
