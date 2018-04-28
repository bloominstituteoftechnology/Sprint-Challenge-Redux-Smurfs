/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING, FETCHED, ERROR, } from '../actions/index'


//  Your initial/default state for this project could look a lot like this
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null,
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {fetchingSmurfs: true});
    case FETCHED:
      return Object.assign({}, state, {fetchingSmurfs: false, fetchedSmurfs: true, smurfs: state.smurfs.concat(action.smurfs)});
    case ERROR:
      return Object.assign({}, state, {fetchingSmurfs: false, error: action.error});
    default:
      return state;
  }
}