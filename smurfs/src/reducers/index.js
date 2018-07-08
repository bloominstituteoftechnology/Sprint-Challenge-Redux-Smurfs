import { FETCHING_SMURF, FETCHED_SMURF, ADDING_SMURF, ADDED_SMURF, SMURFING_ERROR } from '../actions/';

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
    case FETCHING_SMURF:
      return { ...state, fetchingSmurfs: true };
    case FETCHED_SMURF:
      return { ...state, smurfs: action.smurfs, fetchingSmurfs: false, error: null }
    case ADDING_SMURF:
      return { ...state, addingSmurf: true, }
    case ADDED_SMURF:
      return { ...state, smurfs: action.smurfs, addingSmurf: false, error: null }
    case SMURFING_ERROR:
      return { ...state, error: action.errorMessage };
    default:
      return state;
  }
}