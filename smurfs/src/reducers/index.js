import { FETCHING, FETCHED, ERROR_FETCHING } from '../actions';

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  smurfs: [],
};

const smurfs = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case FETCHED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        smurfs: action.payload,
      };
    case ERROR_FETCHING:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
  }
};

export default smurfs;