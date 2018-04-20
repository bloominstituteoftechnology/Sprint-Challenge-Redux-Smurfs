import { FETCHING_SMURFS, SMURFS_FETCHED, ADDING_SMURF, SMURF_ADDED, ERROR } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case SMURFS_FETCHED: 
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.smurfs
      }
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true,
      }
    case SMURF_ADDED:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.smurfs
      }
    case ERROR:
      return {
        ...state,
        error: action.errorMessage
      }
    default: return state
  }
}