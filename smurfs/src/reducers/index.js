import { GET_SMURFS, SUCCESS, ERROR } from '../actions';

const initialState = {
  smurfs: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return Object.assign({}, state, { loading: true });
    case SUCCESS:
      return Object.assign({}, state, {
        smurfs: action.smurfs,
        loading: false,
        error: null,
      });
    case ERROR:
      return Object.assign({}, state, { loading: false, error: action.error });
    default:
      return state;
  }
};
