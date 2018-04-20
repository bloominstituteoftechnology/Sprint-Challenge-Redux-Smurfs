/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHING_SMURFS, SUCCESS_FETCHING_SMURFS, ERROR_FETCHING_SMURFS, 
  POSTING_SMURFS , SUCCESS_POSTING_SMURFS, ERROR_POSTING_SMURFS} from '../actions/index';

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
    error: null
  }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case SUCCESS_FETCHING_SMURFS:
      return Object.assign({}, state, { smurfs: [state.smurfs, ...action.payload]});
    case ERROR_FETCHING_SMURFS:
      return Object.assign({}, state, { error: action.payload });
    case POSTING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case SUCCESS_POSTING_SMURFS:
      return Object.assign({}, state, { smurfs: [state.smurfs, ...action.payload]});
    case ERROR_POSTING_SMURFS:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state
  }
};
