/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURFS, FETCHED, ADDING_SMURF, ERROR, DELETING_SMURF } from '../actions';
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
  fetched: false,
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
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS :
      return { ...state, fetchingSmurfs: true }
    case FETCHED :
      return { ...state, fetchingSmurfs: false,
                         fetched: true,
                         deletingSmurf: false,
                         addingSmurf: false,
                         smurfs: action.payload }
    case ADDING_SMURF :
      return { ...state, addingSmurf: true,
                          fetched: false }
    case ERROR :
      return { ...state, error: action.payload }
    case DELETING_SMURF :
      return { ...state, deletingSmurf: true,
                         fetched: false }
    default:
      return state
  }
}

export default reducer;