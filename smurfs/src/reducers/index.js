/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURF,
  FETCHED_SMURF,
  ERRROR_FETCHING,
  POSTING_SMURF,
  POSTED,
  ERROR_POSTING
} from "./actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  postingSmurfs: false,
  error: null
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF:
      return { ...state, fetchingSmurfs: true };
    case FETCHED_SMURF:
      return { ...state, smurfs: [...action.payload], fetchingSmurfs: false };
    case POSTING_SMURF:
      return { ...state, postingSmurfs: true };
    case POSTED:
      return { ...state, smurfs: [...action.payload], postingSmurfs: false };
    case ERRROR_FETCHING:
      return {
        ...state,
        fetchingSmurfs: false,
        postingSmurfs: false,
        error: action.payload
      };
    case ERROR_POSTING:
      return {
        ...state,
        fetchingSmurfs: false,
        postingSmurfs: false,
        error: action.payload
      };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
