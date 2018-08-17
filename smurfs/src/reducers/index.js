import { FETCHING_SMURFS, SMURFS_FETCHED, SAVING_SMURF, SMURF_SAVED, DELETING_SMURF, SMURF_DELETED, ERROR } from '../action-types';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   savingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: true
      });
    case SMURFS_FETCHED:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfs: action.payload
      });
    case SAVING_SMURF:
      return Object.assign({}, state, {
        savingSmurf: true
      });
    case SMURF_SAVED:
      return Object.assign({}, state, {
        savingSmurf: false,
        smurfs: action.payload
      })
    case ERROR:
      return Object.assign({}, state, {
        error: action.payload
      })
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
