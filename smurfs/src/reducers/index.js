// Imported Action Types
import { PENDING_SMURFS, SUCCESS_SMURFS, ERROR_SMURFS } from '../actions' 

// Set InitialState
const initialState = {
  pending: false,
  smurfs: [],
  error: null
};

// Set up Reducer
const smurfsReducer = (state = initialState, action) => {
  switch (action.payload) {
    case PENDING_SMURFS:
      return Object.assign({}, state, { pending: true });
    case SUCCESS_SMURFS:
      return Object.assign({}, state, {
        pending: false,
        error: null,
        smurfs: [...action.payload]
      });
    case ERROR_SMURFS:
      return Object.assign({}, state, {
        pending: false,
        error: action.payload
      });
    default:
      return state;
  }
};

export default smurfsReducer;
