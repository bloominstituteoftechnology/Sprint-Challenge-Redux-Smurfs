import {
  ADDING,
  ADDSMURF,
  GETTING,
  GETSMURFS,
  UPDATING,
  UPDATESMURF,
  DELETING,
  DELETESMURF,
  ERROR
} from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GETTING:
      return { ...state, fetchingSmurfs: true }
    case GETSMURFS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false }
    case ADDING:
      return { ...state, addingSmurfs: true }
    case ADDSMURF:
      return { ...state, smurfs: action.payload, addingSmurfs: false }
    case UPDATING:
      return { ...state, updatingSmurf: true }
    case UPDATESMURF:
      return { ...state, smurfs: action.payload, updatingSmurf: false }
    case DELETING:
      return { ...state, deletingSmurf: true }
    case DELETESMURF:
      return { ...state, smurfs: action.payload, deletingSmurf: false }
    case ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}

