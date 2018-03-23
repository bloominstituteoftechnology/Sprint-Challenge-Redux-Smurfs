/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, FETCHED, CREATING, CREATED, ERROR } from '../actions';

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
  fetched: false,
  creating: false,
  created: false,
  error: null
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
    case FETCHED:
      return { ...state, smurfs: action.smurfs, fetched: true };
    case ERROR:
      return { ...state, error: null };
    case CREATING:
      return { ...state, creating: true, error: null };
    case CREATED:
      return { ...state, smurfs: action.smurfs, created: true };
    default:
      return state;
  }
};
