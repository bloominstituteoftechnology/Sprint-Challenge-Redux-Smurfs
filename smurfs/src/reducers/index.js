import {
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE
} from "../actions";

//Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        gettingSmurfs: true
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        err: null,
        gettingSmurfs: false,
        smurfs: action.payload
      };
    case GET_SMURFS_FAILURE:
      return {
        ...state,
        gettingSmurfs: false,
        err: action.payload
      };
    case ADD_SMURF_START:
      return {
        ...state,
        gettingSmurfs: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        gettingSmurfs: false,
        smurfs: action.payload
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        gettingSmurfs: false,
        err: action.payload
      };
    default:
      return state;
  }
};

export default smurfReducer;
