import {
  GET_SMURFS,
  ERROR_MESSAGE,
  LOADING,
} from "../actions"

const defaultState = {
  smurfs: [],
  error: false,
  loading: false,
}

export const rootReducer = (state = defaultState, action) => {
  switch(action.type){
    case LOADING:
      return {...state, loading: true, error: false}
    case GET_SMURFS:
      return {...state, smurfs: action.smurfs, loading: false, error: ''}
    case ERROR_MESSAGE:
      return {...state, loading: false, error: true}
    default:
      return state
  }
}

export default rootReducer;