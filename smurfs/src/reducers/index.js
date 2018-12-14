/*
  Be sure to import in all of the action types from `../actions`
*/

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  FETCH,
  SUCCESS,
  ERROR,
  ADD_SMURF,
  ADD_SUCCESS,
  ADD_ERROR
} from '../actions';

const initialState = {
  smurfs: [],
  error: null,
  fetching: false
}

const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_SMURF:
    console.log(action)
      return {
        ...state
      };
    case ADD_SUCCESS:
      return{
        ...state,
        error: null,
        smurfs: action.payload
      };
    case ADD_ERROR:
      return{
        ...state,
        error: action.payload

      };
    case FETCH:
      return {
        ...state,
        fetching: true
      };
    case SUCCESS:
      return{
        ...state,
        error: null,
        smurfs: action.payload,
        fetching: false
      };
    case ERROR:
      return{
        ...state,
        error: action.payload,
        fetching: false
      };
    default:
      return state;
  }
}

export default smurfReducer;
