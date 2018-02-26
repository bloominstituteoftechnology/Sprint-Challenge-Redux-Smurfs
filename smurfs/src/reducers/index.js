import {
  FETCHING_SMURFS,
  SMURFS_RECEIVED,
  ERROR,
  ADDING_SMURF,
  ADDED_SMURF
} from "../actions/index";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: true
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case SMURFS_RECEIVED:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
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
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
