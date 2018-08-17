/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  smurfs: [],
  isFetching: false,
  isFetched: false,
  hasError: false
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        smurfs: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        hasError: action.payload
      };
    default:
      return state;
  }
};
