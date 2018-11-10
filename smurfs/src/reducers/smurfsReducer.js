import * as actionTypes from "../actions";

const initialState = {
  smurfs: [],
  gettingSmurf: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

 export const smurfsReducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.GETTING_SMURF:
      return { ...state, gettingSmurf: true };
    case actionTypes.GET_SMURF:
      return { ...state, smurfs: action.payload, gettingSmurf: false };
    case actionTypes.ADDING_SMURF:
      return { ...state, addingSmurf: true };
    case actionTypes.ADD_SMURF:
      return { ...state, smurfs: action.payload, addingSmurf: false };
    case actionTypes.UPDATING_SMURF:
      return { ...state, updatingSmurf: true };
    case actionTypes.UPDATE_SMURF:
      return { ...state, smurfs: action.payload, updatingSmurf: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
}