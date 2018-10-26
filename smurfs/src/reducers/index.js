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
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILURE,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, isFetching: true };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: [...state.smurfs, ...action.payload]
      };
    case FETCHING_SMURFS_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload };
    case ADD_SMURF_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case UPDATE_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload };
    case UPDATE_SMURF_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case DELETE_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload };
    case DELETE_SMURF_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
