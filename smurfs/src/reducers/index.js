/*
  Be sure to import in all of the action types from `../actions`
*/

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


import {
  SMURFS_FETCH_START,
  SMURFS_FETCH_COMPLETE,
  SMURFS_FETCH_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_COMPLETE,
  ADD_SMURF_FAILURE,
} from '../actions';

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SMURFS_FETCH_START:
      return  { ...state, fetchingSmurfs: true };
    case SMURFS_FETCH_COMPLETE:
      return { ...state, fetchingSmurfs: false, smurfs: action.payload};
    case SMURFS_FETCH_FAILURE:
    return { ...state, fetchingSmurfs: false, error: action.payload};
    case ADD_SMURF_START:
    return { ...state, addingSmurf: true };
    case ADD_SMURF_COMPLETE:
    return { ...state, addingSmurf: false, smurfs: action.payload};
    case ADD_SMURF_FAILURE:
      return { ...state, addingSmurf: false, error: action.payload};
    default:
      return state;
  }
}