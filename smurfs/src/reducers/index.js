/*
  Be sure to import in all of the action types from `../actions`
*/
import { combineReducers } from 'redux'
import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  ADDING_SMURF,
  SMURF_ADDED,
  ERROR
} from '../actions';
/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: true
 }
*/
const initState = {
  smurfs: [],
  fetching: false,
  fetched: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

function smurfReducer(state = initState, action) {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetching: true };
    case SMURFS_FETCHED:
      return { ...state, fetching: false, fetched: true, friends: action.payload };
    // ADDING_SMURF
    // SMURF ADDED
    case ERROR:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({smurfReducer});

export default rootReducer;
