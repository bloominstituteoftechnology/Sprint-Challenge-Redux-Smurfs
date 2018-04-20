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
import {FETCHING, ERROR, FETCHED, CAPTURING } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return { ...state, fetchingSmurfs: true };
    case FETCHED:
      return {...state, fetchingSmurfs: false, addingSmurf: false, smurfs: action.payload, error: null};
    case CAPTURING:
      return {...state, addingSmurf: true};
    default:
      return state; 
  }
}