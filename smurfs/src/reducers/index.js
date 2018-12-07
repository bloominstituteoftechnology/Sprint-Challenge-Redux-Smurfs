import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  EDIT_SMURF_START,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  isFetching: false,
  error: null
};

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

const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
        error: null
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_SMURF_START:
      return {
        ...state,
        isFetching: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
        error: null
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case EDIT_SMURF_START:
      return {
        ...state,
        isFetching: true
      };
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
        error: null
      };
    case EDIT_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case DELETE_SMURF_START:
      return {
        ...state,
        isFetching: true
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
        error: null
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default smurfsReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
