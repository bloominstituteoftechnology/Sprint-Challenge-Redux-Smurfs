import {IS_FETCHING, SMURFS_FETCHED, ERROR_FETCHING_SMURFS } from '../actions/getSmurfs';
import { DELETING_SMURF, SMURF_DELETED, ERROR_DELETING_SMURF } from '../actions/deleteSmurf';
import { IS_ADDING, SMURF_ADDED, ERROR_ADDING_SMURF } from '../actions/createNewSmurf';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
 };


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, fetchingSmurfs: true };
      case SMURFS_FETCHED:
      // console.log('Smurfs: ', action.payload);
      return { ...state, fetchingSmurfs: false, smurfs: action.payload };
    case ERROR_FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: false, error: action.payload };
    case IS_ADDING:
      return { ...state, addingSmurf: true };
    case SMURF_ADDED:
      return { ...state, addingSmurf: false, smurfs: action.payload };
    case ERROR_ADDING_SMURF:
      return { ...state, addingSmurf: false, error: action.payload };
    case DELETING_SMURF:
      return { ...state, deletingSmurfs: true };
    case SMURF_DELETED:
      return { ...state, deletingSmurfs: false, smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload.SmurfRemoved.id) };
    case ERROR_DELETING_SMURF:
      return { ...state, deletingSmurfs: false, error: action.payload };
    default:
      return state;
  }
};