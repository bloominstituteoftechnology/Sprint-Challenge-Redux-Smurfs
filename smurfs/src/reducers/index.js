/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, FETCHED, ADDING, ADDED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from '../actions';

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
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null,
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
          return {...state, fetchingSmurfs: true };
      case FETCHED:
          return {...state, smurfs: action.smurfs, fetchingSmurfs: false, error: null}
      case ADDING:
          return {...state, addingSmurf: true};
      case ADDED:
          return {...state, smurfs: action.smurfs, addingSmurf: false, error: null};
      case UPDATING:
          return {...state, updatingSmurf: true};
      case UPDATED:
          return {...state, smurfs: action.smurfs, updatingSmurf: false, error: null};
      case DELETING:
          return {...state, deletingSmurfs: true};
      case DELETED:
          return {...state, smurfs: action.smurfs, deletingSmurfs: false, error: null};
      case ERROR:
          return {...state, error: action.errorMessage};
      default:
          return state;
  }
};