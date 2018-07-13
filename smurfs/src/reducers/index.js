/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHING, FETCHED, SAVING, SAVED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from '../actions';

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

const initialState = {
  smurfs: [],
  fetching: false,
  fetched: false,
  saving: false,
  saved: false,
  updating: false,
  updated: false,
  deleting: false,
  deleted: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCHING:
          return Object.assign({}, state, {
              fetching: !state.fetching
          });
      case FETCHED:
          return Object.assign({}, state, {
              fetching: !state.fetching,
              fetched: !state.fetched,
              smurfs: action.payload
          });
      case SAVING:
          return Object.assign({}, state, {
              saving: !state.saving
          });
      case SAVED:
          return Object.assign({}, state, {
              saving: !state.saving,
              saved: !state.saved,
              smurfs: action.payload
          });
      case DELETING:
          return Object.assign({}, state, {
              deleting: !state.deleting
          });
      case DELETED:
          return Object.assign({}, state, {
              deleting: !state.deleting,
              deleted: !state.deleted,
              smurfs: action.payload
          });
      case UPDATING:
          return Object.assign({}, state, {
              updating: !state.updating
          });
      case UPDATED:
          return Object.assign({}, state, {
              updating: !state.updating,
              updated: !state.updated,
              smurfs: action.payload
          });
      case ERROR:
          return Object.assign({}, state, {
              error: action.payload
          });
      default:
          return state;
  }
};

export default smurfsReducer;
