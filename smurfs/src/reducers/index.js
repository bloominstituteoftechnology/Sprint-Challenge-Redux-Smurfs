/*
  Be sure to import in all of the action types from `../actions`
*/
import { IS_FETCHING, SMURFS_FETCHED, ERROR_FETCHING_SMURFS } from '../actions';
import { IS_ADDING, SMURF_ADDED, ERROR_ADDING_SMURF } from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 };

 export const rootReducer = (state = initialState, action) => {
   switch (action.type) {
    case IS_FETCHING:
      return null;
    case SMURFS_FETCHED:
      return null;
    case ERROR_FETCHING_SMURFS:
      return null;
    case IS_ADDING:
      return null;
    case SMURF_ADDED:
      return null;
    case ERROR_ADDING_SMURF:
      return null;
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
