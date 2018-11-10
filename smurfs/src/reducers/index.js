import { GET_SMURFS, ERROR, LOADING } from "../actions";
const initialState = {
  loading: false,
  smurfs: [],
  error: null
};
export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, { loading: true, });

    case ERROR:
      return Object.assign({}, state, { error: action.payload, loading: false });

    case GET_SMURFS:
      return Object.assign({}, state, {
        smurfs: action.payload,
        error: null,
        loading: false,
      });
    default:
      return state;
  }
};
