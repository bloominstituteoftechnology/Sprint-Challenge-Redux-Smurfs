/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GET_SMURFS,
  GETTING_SMURFS,
  ERROR,
  ADD_SMURFS,
  ADDING_SMURFS,
  DELETING_SMURFS,
  DELETE_SMURFS
} from "../actions/index";

/*
 Your initial/default state for this project could look a lot like this
 */
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case ERROR:
      return { ...state, error: action.errorMessage };
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.smurfs,
        fetchingSmurfs: false,
        error: null
      };
    case ADDING_SMURFS:
      return {
        ...state,
        addingSmurf: true
      };
    case ADD_SMURFS:
      return {
        ...state,
        smurfs: action.smurfs,
        addingSmurf: false,
        error: null
      };
    case DELETING_SMURFS:
      return {
        ...state,
        deletingSmurfs: true
      };
    case DELETE_SMURFS:
      return {
        ...state,
        deletingSmurfs: false,
        error: null
      };
    default:
      return state;
  }
};
