import { FETCHING, SUCCESS, ERROR } from "../actions";

const initialState = {
  smurfs: [],
  fetching: false,
  error: ''
}

export default (state = initialState, action)=>{
  switch(action.type){
    case FETCHING:
      return Object.assign({}, state, {fetching: true, error: ''});
    case SUCCESS:
      return Object.assign({}, state, {smurfs: action.smurfs, fetching: false, error: ''});
    case ERROR:
      return Object.assign({}, state, {fetching: false, error: action.errorMessage});
    default:
      return state;
  }
}
