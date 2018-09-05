/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  ADDING_SMURF,
  DELETING_SMURF,
  UPDATING_SMURF,
  UPDATE_SMURF,
  ERROR,
  DELETE_SMURF
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  deleteSmurf: false,
  updateSmurf: false,
  error: null
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case SMURFS_FETCHED:
      return Object.assign({}, state, {
        smurfs: action.payload,
        smurfsFetched: true,
        fetchingSmurfs: false
      });
    case ADDING_SMURF:
      return Object.assign({}, state, {
        addingSmurf: true,
        smurfsFetched: false
      });
    case UPDATING_SMURF:
      return Object.assign({}, state, {
        updatingSmurf: true,
        addingSmurf: false
      });
    case DELETE_SMURF:
      return Object.assign({}, state, {
        deleteSmurf: true,
        updatingSmurf: false,
        smurfs: action.payload
      });
    case DELETING_SMURF:
      return Object.assign({}, state, {
        deletingSmurf: true,
        deleteSmurf: false
      });
    case ERROR:
      return Object.assign({}, state, { error: action.payload });
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
