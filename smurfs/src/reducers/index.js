import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  ADDING_SMURF,
  SMURF_ADDED
} from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,

  addingSmurf: false,
  addedSmurf: false,

  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case SMURFS_FETCHED:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        fetchedSmurfs: true
      };
    case ADDING_SMURF:
      return {
        ...state,
       addingSmurf: true, 
      };
    case SMURF_ADDED:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        addedSmurf: true,
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
