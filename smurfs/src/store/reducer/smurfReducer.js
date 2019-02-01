import {
  GET_SMURF,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAIL,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL,
  UPDATE_SMURF,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAIL
} from "../actions/smurfAction";

const initialState = {
  smurf: [],
  loading: false,
  errors: ""
};

export default function smurfReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SMURF:
      return {
        ...state,
        loading: true
      };
    case GET_SMURF_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: "",
        smurf: action.payload
      };
    case GET_SMURF_FAIL:
      return {
        ...state,
        loading: true,
        errors: action.payload
      };
    case ADD_SMURF:
      return {
        ...state,
        loading: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: "",
        smurf: action.payload
      };
    case ADD_SMURF_FAIL:
      return {
        ...state,
        loading: true,
        errors: action.payload
      };
    default:
      return state;
  }
}
