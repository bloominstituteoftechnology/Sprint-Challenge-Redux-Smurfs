/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAIL,
  ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAIL
}
from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
const initialState =
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_SMURFS_START:
      return {
        ...state,
       addingSmurf: true
      }
    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    case ADD_SMURFS_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }  
    case GET_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case GET_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      } 
    default: return {...state}  
  }
}