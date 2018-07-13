/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHING_SMURFS, SMURFS_FETCHED, SMURFS_SAVED, SAVING_SMURFS } from '../actions';

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
      return {...state, savingSmurf: false, smurfSaved: true, 
        smurfs: state.smurfs.concat(action.payload)}; {/*.filter(function (item) {
          return state.smurfs.indexOf(item) < 0;
        }})*/}
  case SAVING_SMURFS:
      return {...state, savingSmurf: true};
    default:
      return state;
  }
} 

var a = [1, 2, 3], b = [101, 2, 1, 10];
var c = a.concat(b.filter(function (item) {
    return a.indexOf(item) < 0;
}));

// d is [1,2,3,101,10]