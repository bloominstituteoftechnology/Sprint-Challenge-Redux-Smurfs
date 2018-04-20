import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  ADDING_SMURF,
  SMURF_ADDED,
  ERROR
} from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
}

const smurfsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: true
      })

    case SMURFS_FETCHED:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfs: [...payload]
      })

    case ADDING_SMURF:
      return Object.assign({}, state, { addingSmurf: true })

    case SMURF_ADDED:
      return Object.assign({}, state, {
        addingSmurf: false,
        smurfs: [...state, ...payload]
      })

    case ERROR:
      return Object.assign({}, state, {
        error: payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurfs: false
      })

    default:
      return state
  }
}
export default smurfsReducer
