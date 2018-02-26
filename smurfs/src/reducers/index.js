/*
  Be sure to import in all of the action types from `../actions`
*/

import * as typeActions from '../actions';

let initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case typeActions.FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
      };
    case typeActions.FETCHED_SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
      };
    case typeActions.ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true,
      };
    case typeActions.ADDED_SMURF:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
      };
    case typeActions.ERROR:
      return {
        error: true,
      };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export default reducer;
