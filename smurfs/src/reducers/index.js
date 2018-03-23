/* REDUCERS
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, FETCHED, ERROR } from '../actions';

//initialize state with default smurf
const initialState = {
  smurfs: [],
  fetching: false,
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
      return { ...state, fetching: true };
    case FETCHED:
      return {
        ...state,
        smurfs: action.smurfs,
        fetching: false,
        smurfsFetched: true,
        error: null
      };
    case ERROR:
      return { ...state, error: action.errorMessage };
    default:
      return state;
  }
};
