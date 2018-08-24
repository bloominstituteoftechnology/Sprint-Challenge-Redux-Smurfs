import * as actionTypes from "./../actions";
// import { Object } from "core-js";

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  updatingSmurf: false,
  creatingSmurf: false,
  deletingSmurf: false,
  error: null
};
export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:
      return { ...state, gettingSmurfs: true };
    case actionTypes.GET_SMURFS:
      return { ...state, smurfs: action.payload, gettingSmurfs: false };
    case actionTypes.UPDATING_SMURF:
      return { ...state, updatingSmurf: true };
    case actionTypes.UPDATE_SMURF:
      return { ...state, smurfs: action.payload, updatingSmurf: false };
    case actionTypes.DELETING_SMURF:
      return { ...state, deletingSmurf: true };
    case actionTypes.DELETE_SMURF:
      return { ...state, smurfs: action.payload, deletingSmurf: false };
    case actionTypes.CREATING_SMURF:
      return { ...state, creatingSmurf: true };
    case actionTypes.CREATE_SMURF:
      return { ...state, smurfs: action.payload, creatingSmurf: false };

    case actionTypes.ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        creatingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      };

    default:
      return state;
  }
};
