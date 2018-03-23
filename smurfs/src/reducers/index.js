import { FETCHINGSMURF, FETCHEDSMURF, ERROR } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 }


 export const rootReducer = (state = initialState, action) => {
   switch(action.type) {
      case FETCHINGSMURF:
        return {...state, fetchingSmurfs: true}
      case FETCHEDSMURF:
        return {...state, fetchingSmurfs: false, smurfs: action.payload}
      case ERROR:
        return {...state, fetchingSmurfs: false, error: action.payload}
      default:
        return state;
   }
 }
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
