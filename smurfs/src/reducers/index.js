import { FETCHING_SMURFS, FETCHED_SMURFS, ERROR_FETCHING, ADDING_SMURF, ADDED_SMURF } from '../actions';

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
} 

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case FETCHED_SMURFS:
      return { ...state, fetchingSmurfs: false, smurfs: action.payload };
    case ADDING_SMURF:
      return { ...state, fetchingSmurfs: true, addingSmurf: true };
    case ADDED_SMURF:
      return { ...state, fetchingSmurfs: false, addingSmurf: false, smurfs: action.payload };
    case ERROR_FETCHING:
      return { ...state, fetchingSmurfs: false, error: action.payload };
    default:
      return state;
  }
}