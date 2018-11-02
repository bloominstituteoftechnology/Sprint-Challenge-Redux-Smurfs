import * as actionTypes from '../actions';

const initialState = {};

export const singleSmurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SINGLE_SMURF:

    default:
      return state;
  }
}