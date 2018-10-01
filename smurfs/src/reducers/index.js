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
  FETCHED_SMURFS,
  NO_SMURFS_FETCHED,
  ADDING_SMURFS,
  ADDED_SMURFS,
  NO_SMURFS_ADDED
} from '../actions';

const initialState = {
  smurfs: [],
   grabbingSmurfs: false,
   addNewSmurf: false,
   error: null
};

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {grabbingSmurfs: true,});
    case FETCHED_SMURFS:
      return Object.assign({}, state, {grabbingSmurfs: false, smurfs: action.payload,});
    case NO_SMURFS_FETCHED:
      console.log(action.payload);
      return Object.assign({}, state, {grabbingSmurfs: false, error: action.payload,});
    case ADDING_SMURFS:
      return Object.assign({}, state, {addNewSmurf: true,});
    case ADDED_SMURFS:
      return Object.assign({}, state, {addNewSmurf: false, smurfs: action.payload,});
    case NO_SMURFS_ADDED:
    console.log(action.payload);
    return Object.assign({}, state, {addNewSmurf: false, error: action.payload,});
    default:
      return state;
  }
}
