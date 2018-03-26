import {
  FETCHING_SMURF,
  FETCHED_SMURF,
  ERROR_FETCHING_SMURF
} from "../actions";
import { SAVING_SMURF, SMURF_SAVING, ERROR_SAVING_SMURF } from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurf: false,
  savingSmurf: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF:
      return { ...state, fetchingSmurf: true };
    case ERROR_FETCHING_SMURF:
      return { ...state, error: action.errorMessage };
    case FETCHED_SMURF:
      return {
        ...state,
        fetchingSmurf: true,
        smurfs: action.smurfs,
        error: null
      };
    case SAVING_SMURF:
      return { ...state, savingSmurf: true };
    case ERROR_SAVING_SMURF:
      return { ...state, error: action.errorMessage };
    case SMURF_SAVING:
      return {
        ...state,
        savingSmurf: false,
        smurfs: action.smurfs
      };
    default:
      return state;
  }
};
