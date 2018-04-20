import { FETCHING_SMURFS, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_ERROR } from '../actions/index.js';


const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 };


 export const smurfsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case FETCHING_SMURFS: 
      return Object.assign({}, state, { fetchingSmurfs: true });
    case FETCHING_SMURFS_SUCCESS:
      return Object.assign({}, state, {
        smurfsFetched: true, 
        fetchingSmurfs: false, 
        error: null,
        smurfs: [...action.payload]
      });
    case FETCHING_SMURFS_ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: action.payload
      });
    default: 
      return state;
  }
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
