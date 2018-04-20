import { FETCHED, ERROR } from '../actions/addSmurfAction';

const initialState = {
  smurfs: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.error };
    case FETCHED:
      return {
        ...state,
        smurfs: action.smurfs,
        error: null
      };
    default:
      return state;
  }
};