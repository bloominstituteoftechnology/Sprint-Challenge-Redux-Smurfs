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
      // return Object.assign(
      //   {},
      //   state,
      //   { smurfs: [...state.smurfs, ...action.payload] },
      //   {
      //     fetchingSmurfs: false,
      //     addingSmurf: false
      //   }
      // );
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: action.payload,
        error: null
      };
    case ERROR:
      return { ...state, error: action.payload };
    case DELETING:
      return { ...state, deletingSmurfs: true };
    case DELETED:
      return { ...state, deletingSmurfs: false };
    case ADDING:
      return { ...state, addingSmurf: true };
    default:
      return state;
  }
};
