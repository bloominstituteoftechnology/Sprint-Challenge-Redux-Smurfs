import {
  FETCHING,
  FETCHED,
  ERROR,
  DELETING,
  DELETED,
  ADDING,
  ADDED
} from "../actions";

const initialState = {
  smurfs: [{ name: "Burky", age: "22", height: "4" }],
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
      return Object.assign(
        {},
        state,
        { smurfs: action.payload },
        {
          fetchingSmurfs: false
        }
      );
    case ERROR:
      return { ...state, error: action.payload };
    case DELETING:
      return { ...state, deletingSmurfs: true };
    case DELETED:
      return { ...state, deletingSmurfs: false };
    case ADDING:
      return { ...state, addingSmurf: true };
    case ADDED:
      return Object.assign(
        {},
        state,
        { smurfs: action.payload },
        { addingSmurf: false }
      );
    default:
      return state;
  }
};
