import { FETCHING_SMURFS, SMURFS_FETCHED, FETCH_ERROR } from './../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  smurfAdded: false,
  updatingSmurf: false,
  smurfUpdated: false,
  deletingSmurf: false,
  smurfDeleted: false,
  error: null
}

export const SmurfReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case FETCHING_SMURFS: 
      return {...state, fetchingSmurfs: true}
      case SMURFS_FETCHED: 
      return {...state, fetchingSmurfs: false, smurfsFetched: true, smurfs: payload}
      case FETCH_ERROR: 
      return {...state, fetchingSmurfs: false, error: payload}
      default: 
      return state;
  }
}
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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
