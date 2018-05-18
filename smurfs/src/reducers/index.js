/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHING_SMURFS, FETCHED_SMURFS, ADDING_SMURF, ADDED_SMURF, ERROR} from '../actions';

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
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { 
        fetchingSmurfs: action.payload 
      })
    case FETCHED_SMURFS:
      return Object.assign({}, state, { 
        smurfs: state.smurfs.concat(action.payload), 
        fetchingSmurfs: false
      })
    case ADDING_SMURF:
      return Object.assign({}, state, {
        addingSmurf: action.payload
      })
    case ADDED_SMURF:
      return Object.assign({}, state, {
        smurfs: state.smurfs.concat(action.payload),
        addingSmurf: false
      })
    case ERROR:
      return Object.assign({}, state, {
        error: action.payload
      })
    default:
      return state;
  }
}