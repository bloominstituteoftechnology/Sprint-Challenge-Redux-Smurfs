/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING,
  FETCHED,
  ERROR,
  DELETING,
  DELETED,
  ADDING
} from "../actions";

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
    case FETCHING:
      return { ...state, fetchingSmurfs: true };
    case FETCHED:
      // return Object.assign(
      //   {},
      //   state,
      //   { smurfs: [...state.smurfs, ...action.payload] },
      //   {
      //     fetchingSmurfs: false,
      //     addingSmurf: false
      //   }
      // );
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      };
    case ERROR:
      return { ...state, error: action.payload };
    case DELETING:
      return { ...state, deletingSmurfs: true };
    case DELETED:
      return { ...state, deletingSmurfs: false };
    case ADDING:
      return { ...state, addingSmurf: true };
    default:
      return state;
  }
};