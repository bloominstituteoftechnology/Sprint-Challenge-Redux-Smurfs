/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  ADDING,
  ADDING_SUCCESS,
  ADDING_FAILURE,
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState =
{
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingSmurfs: true };
    case FETCHING_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false
      };
    case FETCHING_FAILURE:
      return { ...state, fetchingSmurfs: false, error: action.payload };
    case ADDING:
      return { ...state, addingSmurf: true };
    case ADDING_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        addingSmurf: false
      };
    case ADDING_FAILURE:
      return { ...state, addingSmurf: false, error: action.payload };
    default:
      return state;
  }
};
