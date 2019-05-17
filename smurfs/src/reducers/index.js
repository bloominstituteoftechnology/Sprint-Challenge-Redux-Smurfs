/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  ADD_SMURF,
  ADD_COMPLETE,
  LOADING_SMURF,
  LOADING_COMPLETE,
  REMOVE_SMURF,
  REMOVE_COMPLETE,
  EDIT_SMURF,
  EDIT_COMPLETE
} from "../actions";
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: "failed"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SMURF:
      return {
        ...state,
        fetchingSmurfs: !state.fetchingSmurfs
      };
    case LOADING_COMPLETE:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: !state.fetchingSmurfs
      };
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: !state.addingSmurf
      };
    case ADD_COMPLETE:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: !state.addingSmurf
      };
    case REMOVE_SMURF:
      return {
        ...state,
        deletingSmurf: !state.deletingSmurf
      };
    case REMOVE_COMPLETE:
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: !state.deletingSmurf
      };
    case EDIT_SMURF:
      return {
        ...state,
        updatingSmurf: !state.updatingSmurf
      };
    case EDIT_COMPLETE:
      return {
        ...state,
        smurfs: action.payload,
        updatingSmurf: !state.updatingSmurf
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
