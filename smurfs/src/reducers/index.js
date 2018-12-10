import {
  GET_SMURFS,
  GET_SMURFS_FAILURE,
  GET_SMURFS_SUCCESS,
  ADD_SMURF,
  ADD_SMURF_FAILURE,
  ADD_SMURF_SUCCESS,
  UPDATE_SMURF,
  UPDATE_SMURF_FAILURE,
  UPDATE_SMURF_SUCCESS,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from '../actions';

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
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        addingSmurf: false
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingSmurf: false
      };
    case UPDATE_SMURF:
      return {
        ...state,
        updatingSmurf: true
      };
    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        updatingSmurf: false
      };
    case UPDATE_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingSmurf: false
      };
    case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: true
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        deletingSmurf: false
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        deletingSmurf: false
      };
    default:
      return state;
  }
};

export default smurfReducer;
