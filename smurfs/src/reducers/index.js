import { FETCH, FETCHED, ERROR, ADDING, ADDED, REMOVED } from '../actions';

const initialState = {
  loading: false,
  adding: false,
  smurfs: [],
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        loading: true
      };

    case FETCHED:
      return {
        ...state,
        smurfs: action.payload,
        loading: false
      };

    case ERROR:
      return {
        ...state,
        loading: false,
        error: 'Oops, an error occurred!'
      };

    case ADDING:
      return {
        ...state,
        adding: true
      };

    case ADDED:
      return {
        ...state,
        smurfs: action.payload,
        adding: false
      };

    case REMOVED:
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
