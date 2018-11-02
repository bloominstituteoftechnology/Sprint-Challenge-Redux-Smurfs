import * as actionTypes from '../actions';

const initialState = {};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:

    case actionTypes.GET_FRIENDS:

    case actionTypes.CREATING_FRIEND:

    case actionTypes.CREATE_FRIEND:

    case actionTypes.ERROR:
      return {};
    default:
      return state;  
  }
}