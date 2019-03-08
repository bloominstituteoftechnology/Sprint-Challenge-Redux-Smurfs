/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCH_SMURFS_SUCCESS, ADD_SMURF_SUCCESS, DELETE_SMURF_SUCCESS } from '../actions';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_SUCCESS:
      return [...action.payload.smurfs];
    case ADD_SMURF_SUCCESS:
      return [...action.payload.newSmurfs];
    case DELETE_SMURF_SUCCESS:
      return [...action.payload.newSmurfs];
    default:
      return state;
  }
};

export default reducer;
