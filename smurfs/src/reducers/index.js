import { GET_SMURFS, GET_SMURFS_FAILURE, GET_SMURFS_SUCCESS } from '../actions';

const initalState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const smurfReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        fetchingSmurfs: false
      };
    case GET_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    default:
      return state;
  }
};

export default smurfReducer;
