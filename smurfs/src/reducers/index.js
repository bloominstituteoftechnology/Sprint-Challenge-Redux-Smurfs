import {
  FETCHING,
  CREATING,
  UPDATING,
  DELETING,
  SUCCESS,
  ERROR,
  EDITING,
  CANCEL_EDIT,
} from '../actions/types'

const defaultState = {
  smurfs: [],
  pending: false,
  editing: false,
  activeSmurf: {},
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

  case EDITING:
    return {
      ...state,
      editing: true,
      activeSmurf: state.smurfs.filter(s => s.id === action.payload)[0]
    }
  case CANCEL_EDIT:
    return { ...state, editing: false, activeSmurf: {} }

  case SUCCESS:
    return action.payload
      ? { ...state, pending: false, smurfs: action.payload }
      : { ...state, pending: false }
  case ERROR:
    return { ...state, pending: false, error: action.error }

  default:
    return state
  }
}

