import { FETCHING_SMURFS, FETCHING_SUCCESS, FETCHING_ERROR } from '../actions'

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
    case FETCHING_SUCCESS:
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
  default:
    return state
  }
}

export default reducer