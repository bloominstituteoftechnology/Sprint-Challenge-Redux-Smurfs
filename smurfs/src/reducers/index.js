import { FETCHING_SMURF, SMURF_FETCHED, ADDING_SMURF, SMURF_ADDED } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   fetchedSmurfs: false,

   addingSmurf: false,
   addedSmurf: false,

   error: null
 }

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURF:
      return;
      case SMURF_FETCHED:
      return;
      case ADDING_SMURF:
      return;
      case SMURF_ADDED:
      return;
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
