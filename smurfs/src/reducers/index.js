import * as actionTypes from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  smurfSaved: false,
  savingSmurf: false,
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
    case actionTypes.FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case actionTypes.ERROR_FETCHING_SMURFS:
      return { ...state, error: action.error };
    case actionTypes.FETCHED_SMURFS:
      return {
        ...state,
        smurfs: action.smurfs,
        fetchingSmurfs: false,
        error: null
      };
    case actionTypes.CREATING_SMURF:
      return { ...state, savingSmurf: true };
    case actionTypes.ERROR_CREATING_SMURF:
      return { ...state, error: action.error };
    case actionTypes.CREATED_SMURF:
      return {
        ...state,
        smurfs: action.smurfs,
        savingSmurf: false,
        error: null
      };
    default:
      return state;
  }
};
