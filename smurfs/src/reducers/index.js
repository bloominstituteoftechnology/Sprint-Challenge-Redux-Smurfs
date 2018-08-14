import { FETCHING_SMURFS, FETCHED_SMURFS, ERROR_FETCHING, ADDING_SMURF, ADDED_SMURF, KILLING_SMURF, KILLED_SMURF, UPDATING_SMURF, UPDATED_SMURF, EDITING_SMURF } from '../actions';

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  editingSmurf: false,
  updatingSmurf: false,
  killingSmurf: false,
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
    case EDITING_SMURF:
      const smurfs = state.smurfs.filter(smurf => smurf.id === action.payload)
      return { ...state, editingSmurf: true, smurfs: smurfs };
    case UPDATING_SMURF:
      return { ...state, fetchingSmurfs: true, editingSmurf: false, editSmurf: null, updatingSmurf: true };
    case UPDATED_SMURF:
      return { ...state, fetchingSmurfs: false, updatingSmurf: false, smurfs: action.payload };
    case KILLING_SMURF:
      return { ...state, fetchingSmurfs: true, killingSmurf: true }
    case KILLED_SMURF:
      return { ...state, fetchingSmurfs: false, killingSmurf: false, smurfs: action.payload };
    case ERROR_FETCHING:
      return { ...state, fetchingSmurfs: false, error: action.payload };
    default:
      return state;
  }
}