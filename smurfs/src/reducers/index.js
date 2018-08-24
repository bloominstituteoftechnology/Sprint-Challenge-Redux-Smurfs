import { PENDING_SMURFS, SUCCESS_SMURFS, ERROR_SMURFS } from "../actions";

const initialState = {
  pending: false,
  smurfs: [],
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
