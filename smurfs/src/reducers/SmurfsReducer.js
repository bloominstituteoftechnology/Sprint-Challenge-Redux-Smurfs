import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_SUCCESS,
  ADD_FAILURE,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILURE,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  error: null
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload]
      };
    case FETCH_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
