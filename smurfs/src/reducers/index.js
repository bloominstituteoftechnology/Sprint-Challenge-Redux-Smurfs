import {GET_SMURFS, FETCHING, CREATING, ERROR} from '../actions/index'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null 
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: 
      return Object.assign({}, state, {fetchingSmurfs: true})
    case GET_SMURFS:
      return Object.assign({}, state, {smurfs: action.smurfs, fetchingSmurfs: false})
    case CREATING:
      return Object.assign({}, state, {addingSmurf: true, error: null, fetchingSmurfs: false})
    case ERROR:
      return Object.assign({}, state, {error: action.message, fetchingSmurfs: false, addingSmurf: false})
    default:
      return state
  }
}