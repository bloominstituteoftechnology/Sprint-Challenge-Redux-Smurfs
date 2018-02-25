import * as actionTypes from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        smurfsFetched: false
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
    case actionTypes.DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true
      };
    case actionTypes.SMURF_DELETED:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.id)
      };
    case actionTypes.ERROR_DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};
