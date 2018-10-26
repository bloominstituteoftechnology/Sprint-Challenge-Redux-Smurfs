import {FETCHING_SMURF, SMURF_FETCHED, SMURF_FAILURE, ADD_SMURF} from '../actions'

const initialState = {
  smurfs: [],
  isFetching: false,
  error: null
}

const smurfReducer = (state = initialState, action) => {
switch (action.type) {
  case FETCHING_SMURF:
  return {...state, isFetching: true}
  case SMURF_FETCHED:
  return {...state, isFetching: false, smurfs: action.payload}
  case SMURF_FAILURE:
  return {...state, isFetching: false, error: action.payload}
  case ADD_SMURF:
  return {...state, smurfs: action.payload}
  default:
  return state
}
}

export default smurfReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
