import * as AT from "../actions/actionTypes";

const initialState = {
  pending: false,
  error: null,
  smurfs: []
};

const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.PENDING_SMURFS:
      return Object.assign({}, state, { pending: true });
    case AT.SUCCESS_SMURFS:
      return Object.assign({}, state, {
        pending: false,
        error: null,
        smurfs: [...action.payload]
      });
    case AT.ERROR_SMURFS:
      return Object.assign({}, state, {
        pending: false,
        error: action.payload
      });
    default:
      return state;
  }
};

export default smurfsReducer;
