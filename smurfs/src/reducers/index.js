/*
  Be sure to import in all of the action types from `../actions`
*/

import * as actionType from '../actions';

const initialState = {
  smurfs: [],
  evictedSmurfs: [],

  fetchingSmurfs: false,
  smurfsFetched: false,

  addingSmurf: false,
  smurfAdded: false,

  updatingSmurf: false,
  smurfUpdated: false,

  deletingSmurf: false,
  smurfDeleted: false,

  showUi: false,
  error: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
    // reset action state

    case actionType.RESET_ACTION_STATE:
      return {
        ...state,
        smurfsFetched: false,
        smurfAdded: false,
        smurfUpdated: false,
        smurfDeleted: false,
      };

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
    // edit smurf

    case actionType.SMURF_EDITING:
      return {
        ...state,
        updatingSmurf: true,
        showUi: false,
      };
    case actionType.SMURF_EDITING_SUCCESS:
      return {
        ...state,
        smurfs: state.smurfs.map(smurf => {
          if (smurf.id === action.payload.id) return action.payload;
          return smurf;
        }),
        updatingSmurf: false,
        smurfUpdated: true,
        showUi: true,
      };
    case actionType.SMURF_EDITING_ERROR:
      return {
        ...state,
        updatingSmurf: false,
        showUi: true,
        error: action.payload,
      };

    // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
    // delete smurf

    case actionType.SMURF_DELETING:
      return {
        ...state,
        deletingSmurf: true,
        showUi: false,
      };
    case actionType.SMURF_DELETING_SUCCESS:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload.id),
        evictedSmurfs: [...state.evictedSmurfs, action.payload],
        deletingSmurf: false,
        smurfDeleted: true,
        showUi: true,
      };
    case actionType.SMURF_DELETING_ERROR:
      return {
        ...state,
        deletingSmurf: false,
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
