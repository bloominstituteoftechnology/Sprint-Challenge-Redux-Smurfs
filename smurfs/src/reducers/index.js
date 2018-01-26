/*
  Be sure to import in all of the action types from `../actions`
*/

import * as actionType from '../actions';

const initialState = {
  smurfs: [],

  fetchingSmurfs: false,
  smurfsFetched: false,

  addingSmurf: false,
  smurfAdded: false,

  updatingSmurf: false,

  deletingSmurfs: false,

  error: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
    // get smurfs

    case actionType.SMURFS_FETCHING:
      return {
        ...state,
        fetchingSmurfs: true,
      };
    case actionType.SMURFS_FETCHING_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfsFetched: true,
        smurfs: action.payload,
      };
    case actionType.SMURFS_FETCHING_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      };

    // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
    // add smurf

    case actionType.SMURF_ADDING:
      return {
        ...state,
        addingSmurf: true,
      };
    case actionType.SMURF_ADDING_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfAdded: true,
        smurfs: action.payload,
      };
    case actionType.SMURF_ADDING_ERROR:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
      };

    // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
    // default

    default:
      return state;
  }
};

export default rootReducer;
