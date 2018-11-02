import {
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from '../actions';
const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  addingSmurf: false,
  error: null
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        gettingSmurfs: true
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        gettingSmurfs: false
      };
    case GET_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        isAdding: true
      };
    case ADD_SMURF_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        smurfs: [...action.payload],
        isAdding: false
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

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
