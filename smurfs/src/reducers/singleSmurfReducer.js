import * as actionTypes from '../actions';

const initialState = {
  smurfSelected: {}
};

export const singleSmurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SINGLE_SMURF:
    return {
      ...state,
      smurfSelected: action.payload
    }
    default:
      return state;
  }
};