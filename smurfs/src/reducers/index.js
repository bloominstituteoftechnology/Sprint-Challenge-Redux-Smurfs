
import { FETCHING_SMURFS, SMURFS_FETCHED, ADDING_SMURF, SMURF_ADDED, DELETING_SMURF, SMURF_DELETED, ERROR } from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  smurfAdded:false,
  deletingSmurf: false,
  smurfDeleted: false,
  error: null
}

export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs:true, addingSmurf:false, smurfAdded:false,  deletingSmurf: false, smurfDeleted:true};
    case SMURFS_FETCHED:
      return { ...state, fetchingSmurfs:false, smurfsFetched:true,addingSmurf:false, smurfAdded:false, smurfs: action.payload};
    case ADDING_SMURF:
      return { ...state, addingSmurf: true }
    case SMURF_ADDED:
      return { ...state, addingSmurf: false, smurfAdded: true, smurfs:action.payload}
    case DELETING_SMURF:
      return { ...state, deletingSmurf:true }
    case SMURF_DELETED:
      return { ...state, deletingSmurf: false, smurfDeleted:true, smurfs:action.payload}
    case ERROR:
    return { ...state, fetchingSmurfs: false, smurfsFetched: false, error: action.payload}
    default:
    return state;
  }
}