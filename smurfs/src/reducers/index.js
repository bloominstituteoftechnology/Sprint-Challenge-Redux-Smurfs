import {
  FETCHED_SMURF,
  FETCHING_SMURF,
  ERROR_FETCHING_SMURF,
  CREATING_SMURF,
  ERROR_CREATING_SMURF,
  SMURF_CREATED,
  DELETING_SMURF,
  SMURF_DELETED,
  SMURF_UPDATED,
  UPDATING_SMURF,
  ERROR_UPDATING_SMURF
} from "../actions";

const initialState = {
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  smurfAdded: false,
  deletingSmurf: false,
  smurfDeleted: false,
  updatingSmurf: false,
  smurfs: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF:
      return { ...state, fetchingSmurfs: true };
    case ERROR_FETCHING_SMURF:
      return { ...state, error: action.errorMessage };
    case FETCHED_SMURF:
      return {
        ...state,
        smurfs: action.smurfs,
        fetchingSmurfs: false,
        error: null
      };

    case CREATING_SMURF:
      return { ...state, addingSmurf: true };
    case ERROR_CREATING_SMURF:
      return { ...state, error: action.error };
    case SMURF_CREATED:
      return {
        ...state,
        smurfs: action.smurfs,
        addingSmurf: false,
        error: null
      };
    case DELETING_SMURF:
      return { ...state, deletingSmurf: true };
    case SMURF_DELETED:
      return {
        ...state,
        smurfs: action.smurfs,
        deletingSmurf: false,
        error: null
      };

    case UPDATING_SMURF:
      return { ...state, updatingSmurf: true };
    case ERROR_UPDATING_SMURF:
      return { ...state, error: action.error };
    case SMURF_UPDATED:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
