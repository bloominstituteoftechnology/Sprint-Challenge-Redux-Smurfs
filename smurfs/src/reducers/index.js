/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHING_SMURFS, SMURFS_FETCHED, SMURFS_SAVED, SAVING_SMURFS, DELETING_SMURF, SMURF_DELETED } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case SMURFS_FETCHED:
      return { ...state, fetchingSmurfs: false, smurfsFetched: true, smurfs: state.smurfs.concat(action.payload) };
    case SMURFS_SAVED:
      return {
        ...state, savingSmurf: false, smurfSaved: true,
        smurfs: state.smurfs.concat(action.payload)
      }; {/*.filter(function (item) {
          return state.smurfs.indexOf(item) < 0;
        }})*/}
    case SAVING_SMURFS:
      return { ...state, savingSmurf: true };
    case DELETING_SMURF:
      return { ...state, deletingSmurf: true };
    case SMURF_DELETED:
      return { ...state, deletingSmurf: false, smurfDeleted: true, smurfs: state.smurfs.concat(action.payload) };
    default:
      return state;
  }
} 