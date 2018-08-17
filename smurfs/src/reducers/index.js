import {
  FETCHING,
  FETCHING_POST,
  FETCHING_DEL,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_NEW_SMURF,
  DEL_SMURF
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isFetched: false,
  hasError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };
    case FETCHING_POST:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };
    case FETCHING_DEL:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        smurfs: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        hasError: action.payload
      };
    case ADD_NEW_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        isFetched: true
      };
    case DEL_SMURF:
      return {
        ...state,
        smurfs: state.smurfs,
        isFetching: false,
        isFetched: true
      };
    default:
      return state;
  }
};
