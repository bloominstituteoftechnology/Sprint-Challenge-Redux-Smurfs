import { FETCHING_SMURFS, SUCCESS, FETCHING_ERROR, ADDING_SMURF } from '../actions'

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
}

function reducer (state = initialState, action) {
  console.log('reducer', action)
  switch(action.type) {
    case FETCHING_SMURFS:
    return {
      ...state,
      fetchingSmurfs: true,
      error: null
    }
    case SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      error: null
    }
    case FETCHING_ERROR:
    return {
      ...state,
      error: action.payload
    }
    case ADDING_SMURF:
    return {
      ...state,
      addingSmurf: true,
      error: null
    }
  default:
    return state
  }
}

export default reducer