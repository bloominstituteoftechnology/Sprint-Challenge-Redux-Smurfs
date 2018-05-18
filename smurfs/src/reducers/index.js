import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  ADDING_SMURF,
  SMURF_ADDED,
  UPDATING_SMURF,
  SMURF_UPDATED,
  DELETING_SMURF,
  SMURF_DELETED,
  ERROR
} from '../actions/ActionTypes';

const initialState = {
  smurfs: [],
  error: null,
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return state;
    
    case SMURFS_FETCHED:
      return state;
    
    case ADDING_SMURF:
      return state;
    
    case SMURF_ADDED:
      return state;

    case UPDATING_SMURF:
      return state;

    case SMURF_UPDATED:
      return state;

    case DELETING_SMURF:
      return state;

    case SMURF_DELETED:
      return state;

    case ERROR:
      return state;

    default:
      return state;
  }
};
