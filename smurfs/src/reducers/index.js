/*
  Be sure to import in all of the action types from `../actions`
*/

import { 
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  GET_SMURFS,
  ADD_SMURF,
  // UPDATE_SMURF,
  // DELETE_SMURF
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

 const reducer = (state = initialState, action) => {
   switch(action.type){
    case GET_SMURFS:
      return {
        ...state,
        requestingSmurfs: true
      }

    case REQUEST_SUCCESS:
    return {
      ...state,
      requestingSmurfs: false,
      smurfs: action.payload,
      error: null,
      addingSmurf: false
    }

    case REQUEST_FAIL:
    return {
      ...state,
      requestingSmurfs: false,
      error: action.payload,
      addingSmurf: false
    }

    case ADD_SMURF:
    return {
      ...state,
      smurfs: action.payload,
      addingSmurf: true
    }


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
