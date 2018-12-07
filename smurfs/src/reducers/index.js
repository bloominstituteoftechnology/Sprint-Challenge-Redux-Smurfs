import {
  SMURF_FETCHING,
  SMURF_SUCCESS,
  SMURF_FAILURE,
  ADD_SMURF_FETCHING,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from '../actions'

const initialState= {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case SMURF_FETCHING:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: null
      }
    case SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }

    case ADD_SMURF_FETCHING:
      return {
        ...state,
        addingSmurf: true,
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }

    default:
      return state;
  }
}

export default reducer;