/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  GETTING_SMURFS,
  GOT_SMURFS,
  ADDING_SMURF,
  ADDED_SMURF,
  ERROR
} from "../actions";

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURFS:
      return { ...state, gettingSmurfs: true };
    case GOT_SMURFS:
      return { ...state, smurfs: action.payload, gettingSmurfs: false };
    case ADDING_SMURF:
      return { ...state, addingSmurf: true };
    case ADDED_SMURF:
      return { ...state, smurfs: action.payload, addingSmurf: false };
    case ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        addingSmurf: false,
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
