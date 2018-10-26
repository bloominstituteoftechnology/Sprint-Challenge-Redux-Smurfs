/*
  Be sure to import in all of the action types from `../actions`
*/
import { GETTING_SMURF, SMURFS_RECEIVED, ERROR, CREATING_SMURF, CREATED_SMURF } from '../actions/index';
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
const intitialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export default (state = intitialState, action) => {
  switch(action.type) {
    case GETTING_SMURF:
      return { ...state, fetchingSmurfs: true };
    case SMURFS_RECEIVED:
      return { ...state, fetchingSmurfs: false, smurfs: action.payload }
    case CREATING_SMURF:
      return { ...state, addingSmurf: true }
    case CREATED_SMURF:
      return { ...state, addingSmurf: false , smurfs: action.payload }
    case ERROR:
      return { ...state, fetchingSmurfs: false, error: action.payload }
    default:
      return state;
    }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
