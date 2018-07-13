/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURFS, GET_SMURFS, ERROR } from "../actions/index";

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
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case GET_SMURFS:
      return Object.assign({}, state, { smurfs: action.payload });
    case ERROR:
      return Object.assign({}, state, { error: "ERROR, no smurfs found!" });
    default:
      return state;
  }
};
