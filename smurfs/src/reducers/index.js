import { FETCHING, FETCHED, CREATING, CREATED, ERROR } from "../actions";

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  creatingSmurf: false,
  error: null
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state, 
        fetchingSmurfs: true
      };
    case FETCHED: 
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false
      };
    case CREATING:
      return {
        ...state,
        creatingSmurf: true
      };
    case CREATED:
      return {
        ...state,
        smurfs: [...action.payload],
        creatingSmurf: false
      };
    case ERROR:
      return {
        fetchingSmurfs: false,
        creatingSmurf: false,
        error: "There was an error fetching the smurf people."
      }
    default:
      return state;
  }
};
