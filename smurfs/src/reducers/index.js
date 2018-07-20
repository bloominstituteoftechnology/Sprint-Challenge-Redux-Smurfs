/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING_SMURF, ADDING_SMURF, UPDATING_SMURF, DELETING_SMURF, ERROR, CREATE_SMURF} from '../actions'
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
  createSmurf: false,
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

const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURF:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
        addingSmurf: false,
        createSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      })
      case ADDING_SMURF:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: true,
        updatingSmurf: false,
        createSmurf: false,
        deletingSmurf: false,
        error: null,
        smurfs: action.payload
      })
      case UPDATING_SMURF:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: false,
        createSmurf: false,
        updatingSmurf: true,
        deletingSmurf: false,
        error: null
      })
      case CREATE_SMURF:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: false,
        createSmurf: true,
        updatingSmurf: true,
        deletingSmurf: false,
        error: null,
        smurfs: action.payload
      })
      case DELETING_SMURF:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        createSmurf: false,
        deletingSmurf: true,
        error: null
      })
      case ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: false,
        createSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      })
    default:
      return state
  }
}

export default smurfReducer