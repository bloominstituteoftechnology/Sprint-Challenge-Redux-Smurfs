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

import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADDING_SMURFS_SUCCESS,
  ADDING_SMURFS_FAILURE,
  DELETING_SMURFS_SUCCESS,
  DELETING_SMURFS_FAILURE,
  CLEAR_ERROR
} from '../actions';


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {...state, smurfs: action.payload, fetchingSmurfs: true};
    case ADDING_SMURFS_SUCCESS:
      return {...state, smurfs: action.payload, addingSmurf: true};
    default:
      return state;
  }
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
