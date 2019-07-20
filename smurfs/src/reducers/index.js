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

import { GET_SMURF_START, GET_SMURF_SUCCESS, GET_SMURF_FAILED } from '../actions/index';

const initialState = {
  isLoading: false,
  errorMessage: null,
  smurfs: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SMURF_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case GET_SMURF_SUCCESS: {
      const smurfs = action.payload
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        smurfs,
      }
    }
    case GET_SMURF_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.message
      }
    }
    default:
      return state
  }
}