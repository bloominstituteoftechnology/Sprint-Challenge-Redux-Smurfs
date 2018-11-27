/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING, SUCCESS, ERROR, ADD_SMURF, UPDATE_SMURF, DELETE_SMURF} from '../actions/index';

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
    case FETCHING: 
      return Object.assign({}, state, {
        fetchingSmurfs: true,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null});
    case SUCCESS:
      return Object.assign({}, state, {
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      });
    case ERROR: 
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      });
    case ADD_SMURF:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
        addingSmurf: true,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      });
  
    case UPDATE_SMURF:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
        addingSmurf: false,
        updatingSmurf: true,
        deletingSmurf: false,
        error: null
      });
    
    case DELETE_SMURF:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: true,
        error: null});
   
   default: 
    return state
      }
    }
