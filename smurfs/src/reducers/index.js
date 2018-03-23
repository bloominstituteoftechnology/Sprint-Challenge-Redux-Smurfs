/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHING_SMURFS, FETCHED_SMURFS, ADDING_SMURF, ADDED_SMURF, ERROR } from '../actions';

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
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case FETCHED_SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        smurfs: action.payload
      };
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case ADDED_SMURF:
      return {
        ...state,
        addingSmurf: false,
        addedSmurf: true,
        smurfs: action.payload
      };
    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        fetchedSmurfs: false,
        addingSmurf: false,
        addedSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};
