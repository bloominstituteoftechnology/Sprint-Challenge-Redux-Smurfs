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
    default:
      return state;
  }
}