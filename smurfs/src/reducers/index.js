/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  GET_SMURFS,
  ADD_SMURFS,
  UPDATE_SMURF,
  DELETE_SMURF,
  FETCHING_SMURF,
  ADDING_SMURF,
  UPDATING_SMURF,
  DELETING_SMURF,
  ERROR
} from "../actions";

const initState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return state;
    case ADD_SMURFS:
      return state;
    case UPDATE_SMURF:
      return state;
    case DELETE_SMURF:
      return state;
    case FETCHING_SMURF:
      return state;
    case ADDING_SMURF:
      return state;
    case UPDATING_SMURF:
      return state;
    case DELETING_SMURF:
      return state;
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
