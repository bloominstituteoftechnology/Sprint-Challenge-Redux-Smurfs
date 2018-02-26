import { SMURFS_RECEIVED, GETSMURFS } from "../actions/index";

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could look a lot like this */
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: true,
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETSMURFS:
      return {...state, fetchingSmurfs: true };
    case SMURFS_RECEIVED:
      return {...state, fetchingSmurfs: false, smurfs: action.payload };
    default:
    return state;
  }
}
