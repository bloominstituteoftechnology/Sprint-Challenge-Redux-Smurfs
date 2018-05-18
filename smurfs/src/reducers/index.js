/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHING_SMURFS, SMURFS_FETCHED, SAVING_SMURFS, SMURFS_SAVED, DELETING_SMURF, SMURF_DELETED, UPDATING_SMURF, SMURF_UPDATED, ERROR } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this */

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  savingSmurfs: false,
  smurfsSaved: false,
  deletingSmurf: false,
  smurfDeleted: false,
  updatingSmurf: false,
  smurfUpdated: false,
  error: null
}

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case SMURFS_FETCHED:
      return Object.assign({}, state, { smurfs: action.payload, fetchingSmurfs: false, smurfsFetched: true });
    case SAVING_SMURFS:
      return Object.assign({}, state, { smurfsFetched: false, savingSmurfs: true });
    case SMURFS_SAVED:
      return Object.assign({}, state, { smurfs: action.payload, savingSmurfs: false, smurfsSaved: true });
    case DELETING_SMURF:
      return Object.assign({}, state, { smurfsSaved: false, deletingSmurf: true });
    case SMURF_DELETED:
      return Object.assign({}, state, { smurfs: action.payload, deletingSmurf: false, smurfDeleted: true });
    case UPDATING_SMURF:
      return Object.assign({}, state, { smurfDeleted: false, updatingSmurf: true });
    case SMURF_UPDATED:
      return Object.assign({}, state, { smurfs: action.payload, updatingSmurf: false, smurfUpdated: true })
    case ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
