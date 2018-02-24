import * as actionTypes from '../actions';

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurfs: false,
  error: true,
}

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:
      return { ...state, gettingSmurfs: true };
    case actionTypes.GET_SMURFS:
      return { ...state, smurfs: action.payload, gettingSmurfs: false };
    case actionTypes.ADDING_SMURF:
      return { ...state, addingSmurf: true};
    case actionTypes.ADD_SMURF:
      return { ...state, smurfs: action.payload, addingSmurf: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        addingSmurf: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
