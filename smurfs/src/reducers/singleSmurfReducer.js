import * as actionTypes from "../actions";

const initialState = {
  smurfSelected: {},
  showUpdate: false
};

export const singleSmurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SINGLE_SMURF:
      return { ...state, smurfSelected: action.payload };
    case actionTypes.TOGGLE_UPDATE_SMURF:
      return { ...state, showUpdate: !state.showUpdate };
    default:
      return state;
  }
};