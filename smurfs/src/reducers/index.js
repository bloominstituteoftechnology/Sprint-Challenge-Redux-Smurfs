/*
  Be sure to import in all of the action types from `../actions`
*/

import { 
  START_REQUEST,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  ADD_SMURF,
  GET_SMURFS,
  UPDATE_SMURF,
  DELETE_SMURF
 } from "../actions";

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
  smurfs: [],
  requestingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

 const reducer = (state, action) => {
   switch(action.type){
    // case START_REQUEST:

    // case REQUEST_SUCCESS:

    // case REQUEST_FAIL:

    // case ADD_SMURF:

    // case GET_SMURFS:

    // case UPDATE_SMURF:

    // case DELETE_SMURF:

    default:
      return state;
   }
 }

 export default reducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
