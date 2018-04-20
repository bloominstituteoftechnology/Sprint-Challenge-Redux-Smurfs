import { GET_SMURF, POST_SMURF, PUT_SMURF, DELETE_SMURF, ERROR } from "../actions";

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
  };

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURF:
      return { ...state, smurfs: action.smurfs, error: null};
    case POST_SMURF:
      return { ...state, smurfs: action.smurfs, error: null};;
    case PUT_SMURF:
      return { ...state, smurfs: [action.smurfs], error: null};;
    case DELETE_SMURF:
      const index = state.smurfs.findIndex(smurf => smurf.id === action.id);
      const filtered = [...state.smurfs.slice(0, index), ...state.smurfs.slice(index + 1)];
      return { ...state,  smurfs: filtered, error: null};;
    case ERROR:
      return { ...state, error: action.errorMessage};;
    default:
      return state;
  }
}