import {FETCHING_SMURFS, SMURFS_FETCHED, FETCHING_SMURFS_ERROR, ADDING_SMURF, SMURF_ADDED, ADDING_SMURF_ERROR, UPDATING_SMURF, SMURF_UPDATED, UPDATING_SMURF_ERROR, DELETING_SMURF, SMURF_DELETED, DELETING_SMURF_ERROR} from '../actions'


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  smurfAdded: false,
  updatingSmurf: false,
  smurfUpdated: false,
  deletingSmurfs: false,
  smurfDeleted: true,
  error: null
}

const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS: 
      return {...state, fetchingSmurfs: true};
    case SMURFS_FETCHED:
      return {...state, fetchingSmurfs: false, smurfsFetched: true, smurfs: action.payload};
    case FETCHING_SMURFS_ERROR:
      return {...state, fetchingSmurfs: false, error: action.payload};
    case ADDING_SMURF:
      return {...state, addingSmurf: true};
    case SMURF_ADDED:
      return {...state, addingSmurf: false, smurfAdded: true, smurfs: action.payload}
    case ADDING_SMURF_ERROR:
      return {...state, addingSmurf: false, error: action.payload};
    case UPDATING_SMURF:
      return {...state, updatingSmurf: true};
    case SMURF_UPDATED:
      return {...state, updatingSmurf: false, smurfUpdated: true, smurfs: action.payload};
    case UPDATING_SMURF_ERROR:
      return {...state, updatingSmurf: false, error: action.payload};
    case DELETING_SMURF:
      return {...state, deletingSmurfs: true};
    case SMURF_DELETED:
      return {...state, deletingSmurfs: false, smurfDeleted: true, smurfs: action.payload}
    case DELETING_SMURF_ERROR:
      return {...state, deletingSmurfs: false, error: action.payload}
    default: 
      return state;
  }
}

export default smurfReducer;

