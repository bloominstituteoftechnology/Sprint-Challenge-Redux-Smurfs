import { FETCHING_SMURFS, SMURF_FETCHED, ADDING_SMURF, SMURF_ADDED, UPDATING_SMURF, SMURF_UPDATED, DELETING_SMURF, SMURF_DELETED, ERROR } from '../actions';


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfFetched: false,
  addingSmurf: false,
  smurfAdded: false,
  updatingSmurf: false,
  smurfUpdated: false,
  deletingSmurf: false,
  smurfDeleted: false,
  error: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };

    case SMURF_FETCHED:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false, smurfFetched: true };

    case ADDING_SMURF:
      return { ...state, addingSmurf: true };

    case SMURF_ADDED:
      return { ...state, smurfs: action.payload, addingSmurf: false, smurfAdded: true };

    case UPDATING_SMURF:
      return { ...state, updatingSmurf: true };

    case SMURF_UPDATED:
      return { ...state, smurfs: action.payload, updatingSmurf: false, smurfUpdated: true };

    case DELETING_SMURF:
      return { ...state, deletingSmurf: true };

    case SMURF_DELETED:
      return { ...state, smurfs: action.payload, deletingSmurf: false, smurfDeleted: true }

    case ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}