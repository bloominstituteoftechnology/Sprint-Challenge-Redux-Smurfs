import { // Import action types
  FETCHING_SMURFS, ADDING_SMURF, 
  UPDATING_SMURF, DELETING_SMURFS,
  SMURFS_SUCCESS, SMURFS_ERROR } from '../actions';

// Set initial state
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
}

// Create new state depending on action type
export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: true
      });
    case ADDING_SMURF:
      return Object.assign({}, state, {
        addingSmurf: true,
      });
    case UPDATING_SMURF:
      return Object.assign({}, state, {
        updatingSmurf: true,
      });
    case DELETING_SMURFS:
      return Object.assign({}, state, {
        deletingSmurfs: true,
      });
    case SMURFS_SUCCESS:
      return Object.assign({}, state, {
        smurfs: [...action.payload],
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurfs: false,
      });
    case SMURFS_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
}