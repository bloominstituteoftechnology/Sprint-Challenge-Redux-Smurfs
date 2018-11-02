import * as actionTypes from '../actions';

const initialState = {};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:

    case actionTypes.GET_SMURFS:

    case actionTypes.CREATING_SMURF:

    case actionTypes.CREATE_SMURF:

    case actionTypes.ERROR:
      return {};
    default:
      return state;  
  }
}