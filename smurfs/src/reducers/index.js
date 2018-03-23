import { SMURFS_RECEIVED, GETSMURFS, ERROR_GETTING_SMURFS, SMURF_ADDED, ERROR_CREATING_SMURF, ADDSMURF } from "../actions/index";
/*
  Be sure to import in all of the action types from `../actions`
*/


 //Your initial/default state for this project could look a lot like this

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETSMURFS:
      return {...state, fetchingSmurfs: true };
    case SMURFS_RECEIVED:
      return {...state, fetchingSmurfs: false, smurfs: action.payload };
    case ERROR_GETTING_SMURFS:
      return {...state, error: true, fetchingSmurfs: false};
    case ADDSMURF:
      return {...state, addingSmurf: true}
    case SMURF_ADDED:
      return {...state, addingSmurf: false, smurfs: action.payload};
    case ERROR_CREATING_SMURF:
      return {...state, error: true, addingSmurf: false}
    default:
    return state;
  }
}