/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  ERROR,
  FETCHING_SMURF,
  FETCHED_SMURF,
  ADDED_SMURF,
  DELETED_SMURF
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  addingSmurf: false,
  addedSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  deletedSmurf: false,
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
    case FETCHING_SMURF:
      return { ...state, fetchingSmurfs: true };
    // return Object.assign({}, state, {
    //   fetchingSmurfs: true,
    //   fetchedSmurfs: false,
    //   error: null
    // });
    case FETCHED_SMURF:
      return {
        ...state,
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        smurfs: action.payload
      };
    // return Object.assign({}, state, {
    //   fetchingSmurfs: false,
    //   fetchedSmurfs: true,
    //   smurfs: action.payload,
    //   error: null
    // });
    case ADDED_SMURF:
      return { ...state, fetchingSmurfs: false, addedSmurf: true };
    case DELETED_SMURF:
      return { ...state, deletedSmurf: true };
    case ERROR:
      return { ...state, error: action.payload };
    // return Object.assign({}, state, {
    //   fetchingSmurfs: false,
    //   fetchedSmurfs: false,
    //   error: action.payload
    // });
    default:
      return state;
  }
};
