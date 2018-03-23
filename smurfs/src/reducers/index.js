/*
  Be sure to import in all of the action types from `../actions`
*/

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

import {
  FETCHED_SMURF,
  FETCHING_SMURF,
  ERROR_FETCHING_SMURF,
  CREATING_SMURF,
  ERROR_CREATING_SMURF,
  SMURF_CREATED,
  // DELETING_SMURF,
  // SMURF_DELETED,
} from "../actions";

const initialState = {
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  smurfAdded: false,
  // deletingFriend: false,
  // friendDeleted: false,
  smurfs: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF:
      return { ...state, fetchingSmurfs: true };
    case ERROR_FETCHING_SMURF:
      return { ...state, error: action.errorMessage };
    case FETCHED_SMURF:
      return {
        ...state,
        smurfs: action.smurfs,
        fetchingSmurfs: false,
        error: null
      };
      
    case CREATING_SMURF:
      return { ...state, addingSmurf: true };
    case ERROR_CREATING_SMURF:
      return { ...state, error: action.error };
    case SMURF_CREATED:
      return { ...state, 
        smurfs: action.smurfs, 
        addingSmurf: false,
        error: null
      };
    // case DELETING_SMURF:
    //   return {...state, deletingFriend: true};
    // case SMURF_DELETED:
    //   return {...state, smurfs: action.smurfs, deletingFriend: false, error: null};
    default:
      return state;
  }
};