import { LOADING, GET_SMURFS, ERROR, ADD_SMURF, UPDATE_SMURF, DELETE_SMURF } from '../actions';


const initialState = {
    loading: false,
    error: '',
    smurfs: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return Object.assign({}, state, {loading: true})
    case ERROR:
      return Object.assign({}, state, {loading: false, error: action.error})
    case GET_SMURFS:
      return {...state, loading: false, error: '', smurfs: action.smurfs}
    case ADD_SMURF:
      return {...state, loading: false, error: '', smurfs: action.smurfs}
    case UPDATE_SMURF:
      return {...state, loading: false, error: '', smurfs: action.smurfs}
    case DELETE_SMURF:
      return {...state, loading: false, error: '', smurfs: action.smurfs}
    default:
      return state
  }
}
