/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHINGSMURFS,
  FETCHEDSMURFS,
  UPDATINGSMURFS,
  DELETINGSMURFS,
  ERROR
} from "../actions";

const initialState = {
  smurfs: [],
  FetchingSmurfs: false,
  FetchedSmurfs: false,
  UpdatingSmurf: false,
  DeletingSmurf: false,
  Error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHINGSMURFS:
      return { ...state, FetchingSmurfs: true };
    case FETCHEDSMURFS:
      return { ...state, FetchedSmurfs: true };
    case UPDATINGSMURFS:
      return {
        ...state,
        UpdatingSmurf: false,
        smurfs: state.smurfs
          .filter(smurf => smurf.id !== action.smurf.id)
          .concat(action.smurf)
      };
    case DELETINGSMURFS:
      return {
        ...state,
        deletingSmurfs: false,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.smurf.id)
      };
    case ERROR:
      return {
        ...state,
        deleteSmurfs: false,
        updatingSmurf: false,
        fetchingSmurfs: false,
        error: action.error
      };
    default:
      return state;
  }
};
