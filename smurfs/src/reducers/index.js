/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  FETCHING_SMURFS,
  SMURFS_FETCH_SUCCESS,
  POSTING_SMURF,
  POSTING_SMURF_SUCCESS,
  ERROR,
} from '../actions';

const initialState = {
  smurfs: [],
  fetching: false,
  postingSmurf: false,
  error: null,
}

const smurfsReducer = (state = initialState, action) => {
  switch (action.type){
    case FETCHING_SMURFS:
      return Object.assign({}, state, {fetching: true});
    case SMURFS_FETCH_SUCCESS:
      return Object.assign({}, state, {smurfs: action.payload, fetching: false});
    case POSTING_SMURF:
      return Object.assign({}, state, {postingSmurf: true})
    case POSTING_SMURF_SUCCESS:
      return Object.assign({}, state, {smurfs: action.payload, posting: false})
    case ERROR:
      return Object.assign({}, state, {fetching: false, postingSmurf: false, error: "error"})
    default:
    return state;
  }
}

export default smurfsReducer
