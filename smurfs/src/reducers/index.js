import {
  GET_SMURFS,
  ERROR_MESSAGE,
  LOADING,
} from "../actions"

const defaultState = {
  smurfs: [],
  error: "",
  loading: false,
}

export const rootReducer = (state = defaultState, action) => {
  switch(action.type){
    case LOADING:
      return {...state, loading: true}
    case GET_SMURFS:
      return {...state, smurfs: action.smurfs, loading: false, error: ''}
    case ERROR_MESSAGE:
      return {...state,  state, error: action.errorMessage, loading: false}
    default:
      return state
  }
}

export default rootReducer;