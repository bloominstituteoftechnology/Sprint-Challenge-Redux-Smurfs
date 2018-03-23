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
import { FETCHED, FETCHING, ERROR } from '../actions';
import { ADDED, ADDING, ADDERROR } from '../actions';

const initialState = {
  smurfs: [],
  fetched: false,
  fetching: false,
  error: null,
  adding: false,
  added: false,
  adderror: null,
}


export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return { ...state, fetching: true }
      case ERROR:
      return { ...state, error: action.errorMessage }
    case FETCHED:
      return { ...state, smurfs: action.smurfs, fetching: false, error: null } 
    case ADDING:
      return { ...state, adding: true }
    case ADDERROR:
      return { ...state, adderror: action.errorMessage }
    case ADDED:
      return { ...state, added: true }
    default:
    return state;
  }
}