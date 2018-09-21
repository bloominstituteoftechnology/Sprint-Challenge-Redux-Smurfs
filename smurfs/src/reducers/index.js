import {
  FETCHING_SMURFS,
  SMURFS_FETCH_SUCCESS,
  POSTING_SMURF,
  POSTING_SMURF_SUCCESS,
  ERROR,
} from '../actions';

const initialState = {
  smurfs: [],
  fetching: false,
  postingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurf: false,
  error: null,
}

const smurfsReducer = (state = initialState, action) => {
  switch (action.type){
    case FETCHING_SMURFS:
      return Object.assign({}, state, {fetching: true});
    case SMURFS_FETCH_SUCCESS:
      return Object.assign({}, state, {smurfs: action.payload, fetching: false});
    case POSTING_SMURF:
      return Object.assign({}, state, {postingSmurf: true})
    case POSTING_SMURF_SUCCESS:
      return Object.assign({}, state, {smurfs: action.payload, posting: false})
    case ERROR:
      return Object.assign({}, state, {fetching: false, postingSmurf: false, error: "error"})
    default:
    return state;
  }
}

export default smurfsReducer
