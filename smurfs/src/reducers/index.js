import { GET_SMURFS, POST_SMURFS, PUT_SMURFS, DELETE_SMURFS, ERROR } from "../actions";

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
    case GET_SMURFS:
      return { ...state, fetchingSmurfs: !state.fetchingSmurfs, smurfs: action.smurfs, error: null};
      break;
    case POST_SMURFS:
      return { ...state, addingSmurf: !state.addingSmurf, smurfs: action.smurfs, error: null};;
      break;
    case PUT_SMURFS:
      return { ...state, updatingSmurf: !state.updatingSmurf,  smurfs: action.smurfs, error: null};;
      break;
    case DELETE_SMURFS:
      return { ...state, deletingSmurf: !state.deletingSmurf,  smurfs: action.smurfs, error: null};;
      break;
    case ERROR:
      return { ...state, error: action.errorMessage};;
      break;
    default:
      return state;
  }
}
