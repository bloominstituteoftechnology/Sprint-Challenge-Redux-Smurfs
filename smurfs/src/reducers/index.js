
import { FETCHING_SMURFS, SMURFS_FETCHED, ERROR } from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
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
export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs:true};
    case SMURFS_FETCHED:
      return { ...state, fetchingSmurfs:false, smurfsFetched:true, smurfs: action.payload};
    case ERROR:
    return { ...state, fetchingSmurfs: false, smurfsFetched: false, error: action.payload}
    default:
    return state;
  }
}