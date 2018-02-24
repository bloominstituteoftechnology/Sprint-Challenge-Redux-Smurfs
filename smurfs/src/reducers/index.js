import * as actionTypes from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case actionTypes.SMURFS_FETCHED:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfsFetched: true,
        smurfs: action.payload
      };
    case actionTypes.ERROR_FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfsFetched: false,
        error: action.payload
      };
    case actionTypes.ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case actionTypes.SMURF_ADDED:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      };
    case actionTypes.ERROR_ADDING_SMURF:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};
