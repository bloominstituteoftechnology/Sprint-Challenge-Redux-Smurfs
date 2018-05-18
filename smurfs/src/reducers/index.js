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
      return Object.assign({}, state, {
        fetchingSmurfs: true,
        error: null
      });
    
    case SMURFS_FETCHED:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: null,
        smurfs: state.smurfs.concat(action.payload)
      });
    
    case ADDING_SMURF:
      return Object.assign({}, state, {
        addingSmurf: true,
        error: null
      });
    
    case SMURF_ADDED:
      return Object.assign({}, state, {
        addingSmurf: false,
        error: null,
        smurfs: action.payload
      });

    case UPDATING_SMURF:
      return Object.assign({}, state, {
        updatingSmurf: true,
        error: null
      });

    case SMURF_UPDATED:
      return Object.assign({}, state, {
        updatingSmurf: false,
        error: null,
        smurfs: action.payload
      });

    case DELETING_SMURF:
      return Object.assign({}, state, {
        deletingSmurf: true,
        error: null
      });

    case SMURF_DELETED:
      return Object.assign({}, state, {
        deletingSmurf: false,
        error: null,
        smurfs: action.payload
      });

    case ERROR:
      return Object.assign({}, state, {
        error: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false
      });

    default:
      return state;
  }
};
