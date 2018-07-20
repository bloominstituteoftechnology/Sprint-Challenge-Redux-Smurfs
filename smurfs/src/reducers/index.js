/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING_SMURF, ADDING_SMURF, UPDATING_SMURF, DELETING_SMURF, ERROR} from '../actions'
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

export const smurfReducer = (state = initialState, action => {
  switch(action.type) {
    case FETCHING_SMURF:
      returnObject.assign({}, state, {
        fetchingSmurfs: true,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      })
      case ADDING_SMURF:
      returnObject.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: true,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null,
        smurfs: action.payload
      })
      case UPDATING_SMURF:
      returnObject.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: true,
        deletingSmurf: false,
        error: null
      })
      case DELETING_SMURF:
      returnObject.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: true,
        error: null
      })
      case ERROR:
      returnObject.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      })
    default:
      return state
  }
})
