import * as actionTypes from "../actions";

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  updatingSmurfs: false,
  error: null
};

//export Smurfs Reducer

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:
      return { ...state, gettingSmurfs: true };
    case actionTypes.GET_SMURFS:
      return { ...state, smurfs: action.payload, gettingSmurfs: false };
    case actionTypes.CREATING_SMURFS:
      return { ...state, creatingSmurfs: true };
    case actionTypes.CREATE_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        creatingSmurfs: false
      };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        creatingSmurfs: false
      };
    default:
      return state;
  }
};
