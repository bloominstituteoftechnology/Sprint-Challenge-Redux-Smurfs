/*
  Be sure to import in all of the action types from `../actions`
*/

import { ADD_SMURF } from "../actions";
import {
  FETCH_SMURFS,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAIL
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case FETCH_SMURFS_SUCCESS:
      return { ...state, fetchingSmurfs: false, smurfs: action.payload };
    case FETCH_SMURFS_FAIL:
      return { ...state, fetchingSmurfs: false, error: action.payload };
    case ADD_SMURF:
      return { ...state, smurfs: action.payload };
    case DELETE_SMURF_START:
      return { ...state };
    case DELETE_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload };
    case DELETE_SMURF_FAIL:
      return { ...state, error: action.payload };
      case UPDATE_SMURF_START:
      return { ...state, isUpdating: true };
    case UPDATE_SMURF_SUCCESS:
      return { ...state, isUpdating:false, smurfs: action.payload };
    case UPDATE_SMURF_FAIL:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default smurfReducer;
