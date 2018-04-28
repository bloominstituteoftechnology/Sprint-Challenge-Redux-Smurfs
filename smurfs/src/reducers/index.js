import {FETCHING_SMURFS, ADDING_SMURF, UPDATING_SMURF, DELETING_SMURF, ERROR} from '../actions'

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurfs: false,
    error: null,
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return (
        Object.assign({}, { smurfs: action.payload, fetchingSmurfs: false })
      )
    case ADDING_SMURF:
      return
    case UPDATING_SMURF:
      return
    case DELETING_SMURF:
      return
    case ERROR:
      return
    default:
    return initialState;
  }
}

export default rootReducer;