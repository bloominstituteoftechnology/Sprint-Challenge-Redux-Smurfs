import * as actionTypes from '../actions';

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  error: null
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:
      return {
        ...state, 
        gettingSmurfs:true
      }
    case actionTypes.GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        gettingSmurfs: false
      }
    case actionTypes.CREATING_SMURF:

    case actionTypes.CREATE_SMURF:

    case actionTypes.ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        error: action.payload
      };
    default:
      return state;  
  }
}