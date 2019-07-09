/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCH_SMURFS,
  CREATE_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETE_SMURF_SUCCESS
} from '../actions';

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

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        err: '',
        fetchingSmurfs: true
      };
    case CREATE_SMURF:
      return {
        ...state,
        addingSmurf: true
      };

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      };

    case ADD_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };

    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)
      };

    default:
      return state;
  }
};
