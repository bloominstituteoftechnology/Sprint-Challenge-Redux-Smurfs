/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHED, FETCHING, ERROR, SMURF_ADDED} from '../actions';

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

const initialState = {
  smurfs: [],
  fetching: false,
  error: null,
  // deletingSmurfs: false
  // addingSmurf: false
  // updatingSmurf: false
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };
    case ERROR:
      return { ...state, error: action.errorMessage };
    case FETCHED:
      return { ...state, smurfs: action.smurfs, fetching: false, error: null };
    case SMURF_ADDED:
      return { ...state, smurfs: action.smurfs, fetching: false, error: null }
    // case DELETE_SMURF:
    //   return {...state, fetching: false, error: null };
    // case DELETED_SMURF:
    //   return {...state, friends: action.friends, fetching: false, error: null}
    default:
      return state;
  }
};