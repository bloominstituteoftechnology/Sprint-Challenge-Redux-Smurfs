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
  ERROR,
  FETCHING_SMURFS,
  FETCHED_SMURFS,
  CREATING_SMURF,
  CREATED_SMURF
} from "../actions";

const initialState = {
  fetchingSmurfs: false,
  smurfsFetched: false,
  smurfAdded: false,
  addingSmurf: false,
  smurfs: [],
  error: null
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case FETCHED_SMURFS:
      return Object.assign({}, state, {
        smurfs: action.payload,
        fetchingSmurfs: false,
        smurfsFetched: true
      });
    case CREATING_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case CREATED_SMURF:
      return {
        ...state,
        addingSmurf: false,
        smurfAdded: true,
        smurfs: action.payload
      };
    case ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: action.payload
      });
    default:
      return state;
  }
};
