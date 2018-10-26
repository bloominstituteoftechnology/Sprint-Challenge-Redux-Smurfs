/*
  Be sure to import in all of the action types from `../actions`
*/
import { ADD_SMURF, ADD_SUCCESS, ADD_ERROR, FETCHING, FETCH_SUCCESS, FETCH_ERROR } from "../actions";

const initialState = {
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  smurfs: [],
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const villageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case FETCH_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true
      }
    case ADD_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    case ADD_ERROR:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    default:
      return state;
  }
};