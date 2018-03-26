/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  GET_SMURFS,
  ADD_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF,
  FETCHING_SMURF,
  ADDING_SMURF,
  UPDATING_SMURF,
  DELETING_SMURF,
  ERROR
} from "../actions";

const initState = {
  smurfs: [
    {
      id: -2,
      name: "Grandpa",
      height: 4,
      age: 18
    },
    {
      id: -1,
      name: "Blondie",
      height: 3,
      age: 21
    }
  ],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        error: null
      };
    case UPDATE_SMURF:
      return { ...state, updatingSmurf: false, error: null };
    case DELETE_SMURF:
      return { ...state, deletingSmurf: false, error: null };
    case FETCHING_SMURF:
      return { ...state, fetchingSmurfs: true };
    case ADDING_SMURF:
      return { ...state, addingSmurf: true };
    case UPDATING_SMURF:
      return { ...state, updatingSmurf: true };
    case DELETING_SMURF:
      return { ...state, deletingSmurf: true };
    case ERROR:
      return { ...state, error: action.error };
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
