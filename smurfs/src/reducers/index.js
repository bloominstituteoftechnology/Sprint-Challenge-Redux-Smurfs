/*
  Be sure to import in all of the action types from `../actions`
*/
import { ADD_SMURFS_START, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAIL } from '../actions';
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
  switch(action.type){
    case ADD_SMURFS_START: 
      return {
        ...state, fetchingSmurfs: true
      }
    case ADD_SMURFS_SUCCESS:
      return {
        ...state, fetchingSmurfs: false
      }
    case ADD_SMURFS_FAIL:
      return {
        ...state, smurfs: action.payload, fetchingSmurfs: false
      }
    default: return {...state}
  }
}