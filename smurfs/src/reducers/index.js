import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILED } from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurf: false,
  addingSmurf: false,
  error: null,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {
        ...state,
        fetchingSmurf: false,
        error: '',
      }

      case FETCHING_SUCCESS:
      return {
        ...state,
        fetchingSmurf: true,
        error: '',
        smurfs: [...state.smurfs, ...action.payload]
      }

      case FETCHING_FAILED:
      return {
        ...state,
        fetchingSmurf: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer;
