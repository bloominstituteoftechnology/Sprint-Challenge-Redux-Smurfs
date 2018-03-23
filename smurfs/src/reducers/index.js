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

import { FETCHING, FETCHED, ADDING, ADDED, ERROR } from "../actions";

const initialState = {
  sm: [],
  getSm: false,
  addSm: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingSmurfs: true };
    case FETCHED:
      return { ...state, fetchingSmurfs: false, smurfs: action.smurfs };
    case ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
