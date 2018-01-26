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

  showUi: false,
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
        showUi: false,
      };
    case actionType.SMURFS_FETCHING_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        smurfsFetched: true,
        showUi: true,
      };
    case actionType.SMURFS_FETCHING_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        showUi: true,
        error: action.payload,
      };

    // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
    // add smurf

    case actionType.SMURF_ADDING:
      return {
        ...state,
        addingSmurf: true,
        showUi: false,
      };
    case actionType.SMURF_ADDING_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        smurfAdded: true,
        showUi: true,
      };
    case actionType.SMURF_ADDING_ERROR:
      return {
        ...state,
        addingSmurf: false,
        showUi: true,
        error: action.payload,
      };

    // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
    // default

    default:
      return state;
  }
};

export default rootReducer;
