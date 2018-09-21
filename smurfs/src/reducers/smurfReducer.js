import * as actionTypes from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  smurfsSaved: false,
  savingSmurfs: false,
  // updatingSmurf: false,
  // deletingSmurf: false,
  error: null
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURF:
      return { ...state, fetchingSmurfs: true };
    case actionTypes.GET_SMURF:
      return {
        ...state,
        smurfsFetched: true,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case actionTypes.POSTING_SMURF:
      return { ...state, savingSmurfs: true };
    case actionTypes.POST_SMURF:
      return {
        ...state,
        smurfsSaved: true,
        savingSmurfs: false,
        smurfs: action.payload
      };
    case actionTypes.ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfsFetched: false,
        smurfsSaved: false,
        savingSmurfs: false
      };
    default:
      return state;
  }
};
