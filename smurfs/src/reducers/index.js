import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
} from "../actions"


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  deletingSmurf: false,
  error: null
}

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: null
      }
    case FETCHING_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    case ADD_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true,
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default smurfReducer;