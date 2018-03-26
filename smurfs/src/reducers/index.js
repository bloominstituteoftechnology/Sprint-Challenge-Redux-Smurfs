import { FETCHING_SMURFS, FETCHED_SMURFS, ERROR, ADD_SMURF } from "../actions";




const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  error: null,
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: true
      });
    case FETCHED_SMURFS:
      return Object.assign({}, initialState, {
        smurfs: action.smurfs
      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.errorMessage
      });
    case ADD_SMURF:
      return Object.assign({}, state, {
        addingSmurf: true,
        smurfs: []
      });

    default:
      return state;
  }
};
