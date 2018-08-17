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
    case FAILURE:
      return { ...state, isFetching: false, err: null };
    default:
      return state;
  }
};
