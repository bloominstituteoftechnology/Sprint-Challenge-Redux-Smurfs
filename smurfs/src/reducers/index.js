import { FETCHING, FETCHED, ERROR, ADDING, ADDED, DELETING, DELETED } from "../actions";

const initialState = {
  smurfs: [{ name: "from initial", age: "22", height: "4" }],
  fetchingSmurfs: false,
  addingSmurf: false,
  deletingSmurfs: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingSmurfs: true, addingSmurf: false, deletingSmurfs: false  };
    case FETCHED:
      // return Object.assign({}, state, { smurfs: action.payload }, {fetchingSmurfs: false});
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };
    case ADDING:
      return { ...state, addingSmurf: true };
    // case ADDED:
    //   // return Object.assign({}, state,{ smurfs: action.payload },{ addingSmurf: false });
    //   return { ...state, smurfs: action.payload, addingSmurf: false };
    case DELETING:
      return { ...state, deletingSmurfs: true };
    // case DELETED:
    //   return { ...state };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
