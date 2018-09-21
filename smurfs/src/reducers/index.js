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
  GET_SMURFS,
  UPDATE_SMURF,
  DELETE_SMURF,
  FETCHING_SMURFS,
  FETCHING_COMPLETE,
} from '../actions'

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export default function (state =initialState, action) {
  switch(action.type){
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload
      }
    case FETCHING_SMURFS:
      return {
        ...state,
        fetching: true
      }
    case FETCHING_COMPLETE:
      return {
        ...state,
        fetching: false
      }
      

    default:
      return state
  }
}