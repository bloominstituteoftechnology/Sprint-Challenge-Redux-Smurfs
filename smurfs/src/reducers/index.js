import { FETCHING_SMURFS, FETCHED_SMURFS, ERROR } from "../actions/index.js";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
};
// root reducer
const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case FETCHED_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfs: [...action.payload];
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: action.payload
      });
    default:
      return state;
  }
};

export default smurfsReducer;
