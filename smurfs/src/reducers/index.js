import {
  FETCHING,
  CREATING,
  UPDATING,
  DELETING,
  SUCCESS,
  ERROR,
} from '../actions/types'

const defaultState = {
  smurfs: [],
  pending: false,
  error: null,
}

export const smurfReducer = (state = defaultState, action) => {
  switch(action.type) {
  case FETCHING:
    return { ...state, pending: true }
  case CREATING:
    return { ...state, pending: true }
  case UPDATING:
    return { ...state, pending: true }
  case DELETING:
    return { ...state, pending: true }
  case SUCCESS:
    return { ...state, pending: false, smurfs: action.payload }
  case ERROR:
    return { ...state, pending: false, error: action.error }

  default:
    return state
  }
}

