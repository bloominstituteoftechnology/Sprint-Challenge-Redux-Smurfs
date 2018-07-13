import { FETCHING_SMURFS, SMURFS_FETCHED, ADDING_SMURF, FETCH_SINGLE_SMURF, DELETE_SMURF } from '../actions'

//Your initial/default state for this project could *Although does not have to* look a lot like this
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
  switch (action.type) {
    case (FETCHING_SMURFS):
      return Object.assign({}, state, { fetchingSmurfs: true });
    case (SMURFS_FETCHED):
      return Object.assign({}, state, { fetchingSmurfs: false, smurfs: action.payload });
    case (ADDING_SMURF):
      return Object.assign({}, state, { fetchingSmurfs: false, addingSmurf: true, smurfs: action.payload });
    case (FETCH_SINGLE_SMURF):
      return Object.assign({}, state, { fetchingSmurfs: false, addingSmurf: false, smurfs: action.payload[0] });
    case (DELETE_SMURF):
      return Object.assign({}, state, { fetchingSmurfs: false, addingSmurf: false, deletingSmurf: true, smurfs: action.payload });
    default:
      return state;
  }
}