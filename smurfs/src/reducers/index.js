import {
  FETCHING,
  FETCHED,
  ERROR,
  ADDING,
  ADDED
} from "../actions";

const initialState = {
  smurfs: [{ name: "Any", age: "22", height: "4" }],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
};

export default  (state = initialState, action) => {
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
    case ADDING:
      return { ...state, addingSmurf: true };
    case ADDED:
      return Object.assign(
        {},
        state,
        { smurfs: action.payload },
        { addingSmurf: false }
      );

    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
