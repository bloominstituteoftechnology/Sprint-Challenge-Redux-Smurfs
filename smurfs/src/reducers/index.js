import { 
  FETCHING_SMURFS, 
  SMURFS_FETCHED,
  ADDING_SMURFS,
  SMURFS_ADDED,
  EDITING_SMURFS,
  SMURFS_UPDATED,
  ERROR
 } from '../actions/index.js';

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetching: false,
  adding: false,
  updating: false,
  error: null
};

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

export default (state = initialState, action) => {
  switch (action.type) {
    case SMURFS_FETCHED:
      return Object.assign({}, state, {
        smurfs: state.smurfs.concat(action.payload),
        fetching: false
      });
    case FETCHING_SMURFS:
      return Object.assign({}, state, { 
        fetching: true
       });
    case ERROR: 
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });
    case SMURFS_ADDED:
      return Object.assign({}, state, {
        adding: false
      });
    case ADDING_SMURFS:
      return Object.assign({}, state, {
        adding: true
      });
    case SMURFS_UPDATED:
      return Object.assign({}, state, {
        updating: false 
      });
    case EDITING_SMURFS:
      return Object.assign({}, state, {
        updating: true
      });
    default:
      return state;  
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
