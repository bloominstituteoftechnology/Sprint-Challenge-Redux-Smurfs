import { FETCHING_SMURFS, SMURFS_FETCHED, ADDING_SMURF, SMURF_ADDED, UPDATING_SMURF, SMURF_UPDATED, DELETING_SMURF, SMURF_DELETED, ERROR } from "../actions";

const initialState = {
  smurfs : [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  smurfAdded: false,
  updatingSmurf: false,
  smurfUpdated: false,
  deletingSmurf: false,
  smurfDeleted: false,
  error: null
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true};
    case SMURFS_FETCHED:
      return {...state, fetchingSmurfs: false, smurfsFetched: true, smurfs: action.payload};

    case ADDING_SMURF:
      return {...state, addingSmurf: true};
    case SMURF_ADDED:
      return {...state, addingSmurf: false, smurfAdded: true, smurfs: action.payload};
    
    case UPDATING_SMURF:
      return {...state, updatingSmurf: true};
    case SMURF_UPDATED:
      return {...state, updatingSmurf: false, smurfUpdated: true, smurfs: action.payload};
    
    case DELETING_SMURF:
      return {...state, deletingSmurf: true};
    case SMURF_DELETED:
      return {...state, deletingSmurf: false, smurfDeleted: true, smurfs: action.payload}
    
    case ERROR:
      return {...state, error: action.payload}

    default:
      return state;
  }
};

export default rootReducer;
