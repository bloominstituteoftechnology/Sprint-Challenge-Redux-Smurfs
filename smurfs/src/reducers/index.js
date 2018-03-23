import {
  FETCHING_SMURFS, FETCHING_SMURFS_ERROR, FETCHED_SMURFS,
  POSTING_SMURF, POSTING_SMURF_ERROR, POSTED_SMURF,
  DELETING_SMURF, DELETING_SMURF_ERROR, DELETED_SMURF,
  PUTTING_SMURF, PUTTING_SMURF_ERROR, PUT_SMURF } from '../actions';
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  postingSmurf: false,
  puttingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case FETCHING_SMURFS_ERROR:
      return { ...state, error: action.errorMessage };
    case FETCHED_SMURFS:
      return { ...state, smurfs: action.smurfs, fetchingSmurfs: false, error: null };

    case POSTING_SMURF:
      return { ...state, postingSmurf: true };
    case POSTING_SMURF_ERROR:
      return { ...state, error: action.errorMessage };
    case POSTED_SMURF:
      return { ...state, smurfs: action.smurfs, postingSmurf: false, error: null };
    
    case DELETING_SMURF:
      return { ...state, deletingSmurf: true };
    case DELETING_SMURF_ERROR:
      return { ...state, error: action.errorMessage };
    case DELETED_SMURF:
    // console.log(action);
      return { ...state, smurfs: state.smurfs.filter(obj => obj.id !== action.id), deletingSmurf: false, error: null };
    
    case PUTTING_SMURF:
      return { ...state, puttingSmurf: true };
    case PUTTING_SMURF_ERROR:
      return { ...state, error: action.errorMessage };
    case PUT_SMURF:
      return { ...state, puttingSmurf: false, error: null }; // !! may need smurfs: action.smurfs
    default:
      return state;
  }
};
