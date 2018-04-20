/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

import * as actionType from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  smurfAdded: false,
  updatingSmurf: false,
  // deletingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case actionType.SMURFS_FETCHED:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        smurfsFetched: true
      };
    case actionType.ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case actionType.SMURF_ADDED:
      return {
        ...state,
        addingSmurf: false,
        error: null,
        smurfadded: true,
        smurfs: action.payload
      };
    case actionType.UPDATING_SMURF:
      return {
        ...state,
        updatingSmurfs: true
      };
    // case actionType.DELETING_SMURF:
    //   const index = state.smurfs.findIndex(smurf => smurf.id === action.id);
    //   const filtered = [...state.smurfs.slice(0, index), ...state.smurfs.slice(index + 1)];
    //   return {
    //     ...state,
    //     smurfs: filtered,
    //     error: null
    //   };
    case actionType.ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfsFetched: false,
        addingSmurf: false,
        smurfAdded: false,
        updatingSmurf: false,
        // deletingSmurfs: false,
        error: action.payload
      }
    default:
      return state;
  }
}