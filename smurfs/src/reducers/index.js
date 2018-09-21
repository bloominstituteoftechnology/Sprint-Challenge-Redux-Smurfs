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
  Components can then read your store as, `state` and not `state.footReducer`.
*/
import {
  ADD_SMURF,
  ADDING_SMURF,
  ADDING_COMPLETE,
  
  GET_SMURFS,
  FETCHING_SMURFS,
  FETCHING_COMPLETE,

  // UPDATE_SMURF,
  // UPDATING_SMURF,
  // UPDATING_COMPLETE,
  
  // DELETE_SMURF,
  // DELETING_SMURF,
  // DELETING_COMPLETE,

  // ERROR_HANDLE
} from '../actions'

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurf: false,
  // error: null
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_SMURF:
      return { ...state, smurfs: action.payload }
    case ADDING_SMURF:
      return { ...state, addingSmurf: true }
    case ADDING_COMPLETE:
      return { ...state, addingSmurf: false }

    case GET_SMURFS:
      return { ...state, smurfs: action.payload }
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true }
    case FETCHING_COMPLETE:
      return { ...state, fetchingSmurfs: false }

    // case UPDATE_SMURF:
    //   return {}
    // case UPDATING_SMURF:
    //   return { ...state, updatingSmurf: true }
    // case UPDATING_COMPLETE:
    //   return { ...state, updatingSmurf: false }
      
    // case DELETE_SMURF:
    //   return {}
    // case DELETING_SMURF:
    //   return { ...state, deletingSmurf: true }
    // case DELETING_COMPLETE:
    //   return { ...state, deletingSmurf: false }
      
    // case ERROR_HANDLE:
    //   return { ...state, error: action.payload }

    default:
      return state
  }
}