import {
  FETCHING_SMURFS,
  ADDING_SMURFS,
  DELETING_SMURFS,
  FETCHED_SMURFS,
  ERROR
} from "../actions/index.js";

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
    case ADDING_SMURFS:
      return Object.assign({}, state, { addingSmurf: true });
    case DELETING_SMURFS:
      return Object.assign({}, state, { deletingSmurfs: true });
    case FETCHED_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurfs: false,
        smurfs: [...action.payload]
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
