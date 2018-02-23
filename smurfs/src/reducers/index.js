import {
  FETCHING,
  FETCHED,
  ERROR_FETCHING,
  ADDING,
  ADDED,
  ERROR_ADDING,
} from '../actions';

const initialState = {
  fetching: false,
  fetched: false,
  adding: false,
  added: false,
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
    case ADDING:
      return {
        ...state,
        adding: true,
      }
    case ADDED:
      return {
        ...state,
        adding: false,
        added: true,
        smurfs: [...smurfs, action.payload]
      }
    case ERROR_ADDING:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
};

export default smurfs;
