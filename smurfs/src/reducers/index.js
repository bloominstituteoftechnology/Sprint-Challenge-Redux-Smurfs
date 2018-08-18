import { GET, SUCCESS, FAILURE } from '../actions';

const initialState = {
  smurfs: [],
  isFetching: false,
  err: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET:
      return { ...state, isFetching: true };
    case SUCCESS:
      return { ...state, isFetching: false, smurfs: action.payload };
    case FAILURE: // err not being utilized currently
      return { ...state, isFetching: false, err: action.payload };
    default:
      return state;
  }
};
