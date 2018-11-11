import { SUCCESS, LOADING, ERROR } from '../actions/index';

const initialState = {
  smurfs: [],
  loading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return {...state, loading: true, error: null}
    case SUCCESS:
      return {  
              smurfs: [...action.payload],
              loading: false,
              error: null,
            }
    case ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}