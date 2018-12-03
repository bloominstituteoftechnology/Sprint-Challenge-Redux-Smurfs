/*
  Be sure to import in all of the action types from `../actions`
*/
// import { FETCHED_SMURFS, FETCHING_SMURFS, SMURF_ERROR } from "../actions";
/*
 Your initial/default state for this project could 
 *Although does not have to* look a lot like this*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return Object.assign({}, state, { fetchingSmurfs: true });
    case "DATA_FETCHED":
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfs: action.payload
      });
    case "SAVING_DATA":
      return Object.assign({}, state, { addingSmurfs: true });
    case "DATA_SAVED":
      return Object.assign({}, state, {
        addingSmurfs: false,
        smurfs: action.payload
      });
    case "ERROR":
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
