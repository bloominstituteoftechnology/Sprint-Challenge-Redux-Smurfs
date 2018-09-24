import { FETCHED, ERRORS, FETCHING } from '../actions';

const initialState = { smurfs: [], smurf: {}, fetching: false, error: '' };

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };

    case FETCHED:
      return {
        ...state,
        smurfs: action.payload,
        fetching: false
      };

    case ERRORS:
      return {
        ...state,
        fetching: false,
        error: `${action.payload}`
      };

    default:
      return state;
  }
};

export default smurfReducer;
