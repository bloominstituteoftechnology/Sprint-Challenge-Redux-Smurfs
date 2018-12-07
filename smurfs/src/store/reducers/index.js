/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURFS_LOADING,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF_LOADING,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  REMOVE_SMURF_LOADING,
  REMOVE_SMURF_SUCCESS,
  REMOVE_SMURF_FAILURE
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
  updatingSmurf: false,
 */
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_LOADING:
      return {
        ...state,
        fetchingSmurfs: true,
        addingSmurf: false,
        deletingSmurf: false
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        smurfs: action.payload
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      };
    case ADD_SMURF_LOADING:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: true,
        deletingSmurf: false
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        smurfs: action.payload
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      };
    case REMOVE_SMURF_LOADING:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: true
      };
    case REMOVE_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        smurfs: action.payload
      };
    case REMOVE_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default smurfsReducer;
