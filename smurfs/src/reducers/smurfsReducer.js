import { FETCH_SMURFS } from '../actions/types';

export const smurfsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return action.payload || false;
    default:
      return state;
  }
};