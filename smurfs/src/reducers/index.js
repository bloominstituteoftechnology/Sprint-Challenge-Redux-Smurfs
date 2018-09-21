import {
  UPDATED_SMURF,
  FETCH_SMURFS,
  FETCHED_SMURFS,
  ERROR,
  ADDING_SMURF,
  ADDED_SMURF,
  DELETING_USER,
  DELETED_USER
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

function smurfReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATED_SMURF:
      return {
        ...state,
        updatingSmurfs: false,
        smurfs: action.payload
      };
    case FETCH_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case FETCHED_SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case ADDED_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false
      };
    case DELETING_USER:
      return {
        ...state,
        deletingSmurf: true
      };
    case DELETED_USER:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload
      };
    case ERROR:
      return {
        ...initialState,
        smurfs: state.smurfs,
        error: action.error
      };
    default:
      return state;
  }
}

export default smurfReducer;














/*
  Be sure to import in all of the action types from `../actions`
*/

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
