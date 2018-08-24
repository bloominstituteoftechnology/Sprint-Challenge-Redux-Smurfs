import { PENDING_SMURFS, SUCCESS_SMURFS, ERROR_SMURFS } from "../actions";

const initialState = {
  pending: false,
  smurfs: [],
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case PENDING_SMURFS:
      return {
        ...state,
        pending: true,
      };
    case SUCCESS_SMURFS:
      return {
        ...state,
        pending: false,
        smurfs: [...action.payload],
      }
    case ERROR_SMURFS:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}
