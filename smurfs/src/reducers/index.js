/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHING, FETCHED, FETCHING_ERROR } from '../actions/index.js';

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

const initalState = {
  fetching: false,
  fetched: false,
  smurfs: [],
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = ( state = initalState, action ) => {
  switch (action.type) { 
    case FETCHING: 
    return Object.assign({}, state, { fetching: true });
    case FETCHED:
    return Object.assign({}, state, {
      fetched: true,
      error: null,
      smurfs: [...action.payload]
    });
    case FETCHING_ERROR:
    return Object.assign({}, state, {
      fetching: false,
      error: action.payload
    });
    default:
    return state;
  }
};