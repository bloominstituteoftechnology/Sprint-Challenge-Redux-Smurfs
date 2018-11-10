import { LOADING, SUCCESS, ERROR } from "../actions/index";

//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case SUCCESS:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: action.payload
      });
    default:
      return state;
  }
};
