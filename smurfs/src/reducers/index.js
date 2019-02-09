import { FETCHING_SMURFS, SUCCESS, ERROR, ADDING_SMURF, DELETING_SMURF} from '../actions'

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
    case ERROR:
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
    case DELETING_SMURF:
    return {
      ...state,
      deletingSmurf: true,
      error: null
    }
  default:
    return state
  }
}

export default reducer