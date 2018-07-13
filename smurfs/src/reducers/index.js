
import { FETCHING_SMURFS, SMURFS_FETCHED, ADDING_SMURF, SMURF_ADDED, ERROR } from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurf: false,
  error: null
}

export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs:true, addingSmurf:false, smurfAdded:false};
    case SMURFS_FETCHED:
      return { ...state, fetchingSmurfs:false, smurfsFetched:true,addingSmurf:false, smurfAdded:false, smurfs: action.payload};
    case ADDING_SMURF:
      return { ...state, addingSmurf: true }
    case SMURF_ADDED:
      return { ...state, addingSmurf: false, smurfAdded: true, smurfs:action.payload}
    case ERROR:
    return { ...state, fetchingSmurfs: false, smurfsFetched: false, error: action.payload}
    default:
    return state;
  }
}