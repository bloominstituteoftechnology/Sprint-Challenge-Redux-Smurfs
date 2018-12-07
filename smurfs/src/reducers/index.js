/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCH_SUMRF_START,
  FETCH_SUMRF_SUCCESS,
  FETCH_SUMRF_FAILURE,
  ADD_SUMRF_START,
  ADD_SUMRF_SUCCESS,
  ADD_SUMRF_FAILURE,
  DELETE_SUMRF_START,
  DELETE_SUMRF_SUCCESS,
  DELETE_SUMRF_FAILURE
} from "../actions";

//Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
  smurfs: [],
  fetching: false,
  error: null
};

// addingSmurf: false
//  updatingSmurf: false
//  deletingSmurf: false

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUMRF_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SUMRF_SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        smurfs: action.payload
      };
    case FETCH_SUMRF_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case ADD_SUMRF_START:
      return {
        ...state,
        fetching: true
      };
    case ADD_SUMRF_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: false,
        smurfs: action.payload
      };
    case ADD_SUMRF_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case DELETE_SUMRF_START:
      return {
        ...state,
        fetching: true
      };
    case DELETE_SUMRF_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: false,
        smurfs: action.payload
      };
    case DELETE_SUMRF_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default smurfReducer;
