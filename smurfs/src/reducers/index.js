import {
  FETCHING,
  CREATING,
  UPDATING,
  DELETING,
  SUCCESS,
  ERROR,
  EDITING,
  CANCEL_EDIT,
  INPUT_CHANGE,
} from '../actions/types'

const defaultState = {
  smurfs: [],
  pending: false,
  editing: false,
  activeSmurf: {
    name: '',
    age: '',
    height: '',
    id: '',
  },
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
  case INPUT_CHANGE:
    return {
      ...state, activeSmurf: { ...state.activeSmurf, ...action.payload }
    }
    
  case CANCEL_EDIT:
    return { ...state, editing: false, activeSmurf: defaultState.activeSmurf }

  case SUCCESS:
    return action.payload
      ? { ...defaultState, smurfs: action.payload }
      : { ...state, pending: false, editing: false, error: false }

  case ERROR:
    return { ...state, pending: false, error: action.error }

  default:
    return state
  }
}

