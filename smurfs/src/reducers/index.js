import {
  FETCHING,
  FETCHED,
  ERROR,
  DELETING,
  DELETED,
  ADDING
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingSmurfs: true };
    case FETCHED:
      return { ...state, fetchingSmurfs: false, smurfs: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case DELETING:
      return { ...state, deletingSmurfs: true };
    case DELETED:
      return { ...state, deletingSmurfs: false };
    default:
      return state;
  }
};
