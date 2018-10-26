/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  ADD_SMURF,
  FETCHING,
  CREATING,
  GET_SMURFS,
  FAILURE,
  DELETE_SMURF
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
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, fetchingSmurfs: true};
    case GET_SMURFS:
      return {...state, smurfs: [...action.payload], fetchingSmurfs: false};
    case ADD_SMURF:
      return {...state, smurfs: [...action.payload]};
    case CREATING:
      return {...state, addingSmurf: true};
    case DELETE_SMURF:
      return {...state, smurfs: [...action.payload]};
    case FAILURE:
      return {...state, error: action.payload};
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default rootReducer;
