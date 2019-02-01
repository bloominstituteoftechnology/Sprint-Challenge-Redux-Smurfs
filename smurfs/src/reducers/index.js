/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURF,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAILURE,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
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

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF:
      return {
        ...state,
        fetchingSmurfs: !state.fetchingSmurfs
      };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: !state.fetchingSmurfs,
        smurfs: [...state.smurfs, ...action.payload]
      };
    case FETCHING_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: !state.fetchingSmurfs,
        smurfs: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: !state.addingSmurf
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: !state.addingSmurf,
        smurfs: [...action.payload]
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: !state.addingSmurf,
        smurf: [action.payload]
      };
    case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: !state.deletingSmurf
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: !state.deletingSmurf,
        smurfs: [...action.payload]
      };
    default:
      return state;
  }
};
