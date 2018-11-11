import { LOADING, LOAD_SMURFS, ERROR } from '../actions/smurfsActions';

const initialState = {
  smurfs: [],
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch(action.type){
    case LOADING:
      return Object.assign({}, state, {loading: true})
    case LOAD_SMURFS:
      return Object.assign({}, state, {smurfs: action.smurfs, loading: false, error: ''})
    case ERROR:
      return Object.assign({}, state, {error: action.errorMessage, loading: false})
    default:
      return state
  }
}