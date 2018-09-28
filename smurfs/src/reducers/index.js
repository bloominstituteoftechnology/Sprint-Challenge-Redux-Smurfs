import { FETCHING_SMURF, FETCHED_SMURF, SMURF_ERROR } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case FETCHED_SMURF:
      return Object.assign({}, state, {
        smurfs: action.data,
        fetchingSmurfs: false
      });
    case SMURF_ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: 'No smurfs!'
      });
    default:
      return state;
  }
};

export default smurfReducer;
