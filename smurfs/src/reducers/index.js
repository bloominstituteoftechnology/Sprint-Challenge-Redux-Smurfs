import { GETTING, GOT, ADDING, ADDED, ERROR } from '../actions';

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
const initialState = {
  smurfs: [],
  getting: false,
  adding: false,
  error: null,
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch(action.type) {
    case GETTING:
    return { ...state, getting: true };
    case GOT:
    return { ...state, smurfs: action.smurfs, getting: false, error: null };
    case ADDING:
    return { ...state, adding: true };
    case ADDED:
    return { ...state, smurfs: action.smurfs, adding: false, error: null };
    case ERROR:
    return { ...state, error: action.errorMessage };
    default:
    return state;
  }
}
