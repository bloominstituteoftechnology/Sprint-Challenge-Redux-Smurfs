import * as act from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case act.FETCHING:
      return { ...state, fetchingSmurfs: true };
    case act.FETCHED:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...state, ...action.payload]
      };
    case act.ADDING:
      return { ...state, addingSmurf: true };
    case act.ADDED:
      return { ...state, addingSmurf: false, smurfs: action.payload };
    case act.UPDATING:
      return { ...state, updatingSmurf: true };
    case act.UPDATED:
      return { ...state, updatingSmurf: false, smurfs: action.payload };
    case act.DELETING:
      return { ...state, deletingSmurf: true };
    case act.DELETED:
      return { ...state, deletingSmurf: false, smurfs: action.payload };
    default:
      return state;
  }
};

export default smurfReducer;
