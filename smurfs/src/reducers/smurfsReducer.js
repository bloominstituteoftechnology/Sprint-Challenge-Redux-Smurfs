import * as actionTypes from '../actions';

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  creatingSmurf: false,
  error: null,
}

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:
      return { 
        ...state, 
        gettingSmurfs: true 
      };

    case actionTypes.GET_SMURFS:
      return {
        ...state,
        gettingSmurfs: false,
        smurfs: action.payload,
      }

    case actionTypes.CREATING_SMURF:
      return { 
        ...state, 
        smurfs: action.payload, 
        creatingSmurf: true,
      };

    case actionTypes.CREATE_SMURF:
      return {
        ...state,
        creatingSmurf: false,
        smurfs: action.payload,
      };
    
    case actionTypes.ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        creatingSmurf: false,
        error: action.payload,
      };

    default:
      return state;
  }
}