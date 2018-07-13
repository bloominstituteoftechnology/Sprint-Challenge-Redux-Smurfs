/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURF, 
  GET_SMURF,
  ADD_SMURF
} from '../actions';


 //Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   fetchedSmurfs: true,
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

export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURF:
    return Object.assign({}, state, {
      fetchingSmurfs: true
    });
    case GET_SMURF:
    return Object.assign({}, state, {
      fetchingSmurfs: false,
      fetchedSmurfs: true,
      smurfs: action.payload
    });
    case ADD_SMURF:
    return Object.assign({}, state, {
      addingSmurf: true
    })
    default:
    return state;
  }
}