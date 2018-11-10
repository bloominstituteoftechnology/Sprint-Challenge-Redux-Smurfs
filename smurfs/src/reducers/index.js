import { LOADING, GET_SMURFS, ERROR_MESSAGE } from '../actions/index';

const initialState = {
  smurfs: [],
  error: '',
  loading: false,
}

export default (state = initialState, action) => {
  switch(action.type){
    case LOADING:
      return Object.assign({}, state, {loading: true})

    case GET_SMURFS:
      return Object.assign({}, state, {smurfs: action.smurfs, loading: false, error: ''})

    case ERROR_MESSAGE:
      return Object.assign({}, state, {error: action.errorMessage, loading: false})

    default:
      return state 
  }
}