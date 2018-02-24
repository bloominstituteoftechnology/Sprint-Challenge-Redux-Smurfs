import * as actionTypes from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: false
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case actionTypes.GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      };
    case actionTypes.CREATING_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case actionTypes.CREATE_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false
      };
    case actionTypes.ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        creatingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};