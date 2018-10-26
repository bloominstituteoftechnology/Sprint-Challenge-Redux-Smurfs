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
  ADDING_SMURF_SUCCESS,
  ADDING_SMURF_FAILURE,
  DELETING_SMURF_SUCCESS,
  DELETING_SMURF_FAILURE,
  CLEAR_ERROR
} from '../actions';


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  // addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurf: false,
  error: null
}

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true};
    case FETCHING_SMURFS_FAILURE:
      return {...state, fetchingSmurfs: false, error: "Not Smurfy"};
    case FETCHING_SMURFS_SUCCESS:
      console.log(action.payload);
      return {...state, smurfs: [...action.payload], fetchingSmurfs: false};
    case ADDING_SMURF_SUCCESS:
      return {...state, smurfs: [...state.smurfs, action.payload]};
    case DELETING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs.filter(smurf => smurf.id !== action.payload)]
      };
    case ADDING_SMURF_FAILURE:
      return {
        ...state,
        error: "Not Smurfy Creation"
      };
      case DELETING_SMURF_FAILURE:
      return {
        ...state,
        error: "Not Smurfy Deletion"
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
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
