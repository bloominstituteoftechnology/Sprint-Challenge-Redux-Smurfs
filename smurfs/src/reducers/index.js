import * as actionTypes from "../actions";

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  creatingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  smurfSelected: {},
  showUpdate: false,
  error: null
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SINGLE_SMURF:
      return { ...state, smurfSelected: action.payload, showUpdate: false };
    case actionTypes.TOGGLE_UPDATE_FRIEND:
      return { ...state, showUpdate: !state.showUpdate };
    case actionTypes.GETTING_SMURFS:
      return { ...state, gettingSmurfs: true };
    case actionTypes.GET_SMURFS:
      return { ...state, smurfs: action.payload, gettingSmurfs: false};
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
        creatingsmurf: false,
        deletingSmurf: false,
        updatingSmurf: false,
        error: action.payload
      };
    default: 
      return state;
  }
};