//import actions
import { LOADING, SUCCESS, FAILURE } from '../actions/index';

//create initial state
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
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
  switch(action.type) {
    case LOADING:
      return Object.assign({}, state, {fetchingSmurfs: true})
    case SUCCESS:
      return Object.assign({}, state, {smurfs: action.smurfs, fetchingSmurfs: false})
    case FAILURE:
      return Object.assign({}, state, {error: action.error, fetchingSmurfs: false})
    default:
      return state
  }
}
