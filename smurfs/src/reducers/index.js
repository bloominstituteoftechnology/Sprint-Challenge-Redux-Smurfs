/*
  Be sure to import in all of the action types from `../actions`
*/
import {GET_SMURFS, GOT_SMURFS, DELETING_SMURF, ADDING_SMURF, ERROR} from '../actions'; // make sure to fill this in with actions

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
  getting: false,
  got: false,
  deleting: false,
  adding: false,
  smurfs: [],
  error: null,
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {...state, getting: true}
    case GOT_SMURFS:
      return {...state, getting: false, got: true, deleting: false, adding: false, smurfs: action.payload}
    case DELETING_SMURF:
      return {...state, deleting: true}
    case ADDING_SMURF:
      return {...state, adding: true}
    case ERROR:
      return {...state, error: action.payload}
    default:
      return state;
  }
}
