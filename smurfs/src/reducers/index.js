import { DELETED, DELETING, ERROR, FETCHED, FETCHING, POSTED, POSTING } from '../actions'

const initState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  smurfAdded: false,
  updatingSmurf: false,
  deletingSmurf: false,
  smurfDeleted: false,
  error: null
}

const smurfReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHED:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false,
        smurfsFetched: true
      }
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case ERROR:
      return {
        ...state,
        error: "Fetch failed"
      }
    case POSTING:
      return {
        ...state,
        addingSmurf: true
      }
    case POSTED:
      return {
        ...state,
        smurfAdded: true,
        addingSmurf: false
      }
    case DELETING:
    case DELETED:
    default:
      return state
  }
}

export default smurfReducer
