import { 
  FETCHED, 
  ERROR,
  FETCHING,
  ADD_SMURF
   } from "../actions";

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

export default (state=initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
      });
    case FETCHED:
      return Object.assign({}, initialState, {
        smurfs: action.smurfs,
      });
    case ERROR:
      return Object.assign({}, state, {
          error: action.errorMessage,
      });
    case ADD_SMURF:
      return Object.assign({}, state, {
        addingSmurf: true,
      })
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
