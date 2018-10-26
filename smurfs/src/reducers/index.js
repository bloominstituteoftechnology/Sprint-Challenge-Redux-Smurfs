/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURF,
 FETCHING_SMURF_SUCCESS,
 ADD_SMURF,
 ADD_SMURF_SUCCESS } from "../actions"


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

 


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURF:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case FETCHING_SMURF_SUCCESS:
      console.log("action payload", action.payload)
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      }
    case ADD_SMURF:
      return {
        addingSmurf: true,
        ...state
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    default:
      return state
  }
}
