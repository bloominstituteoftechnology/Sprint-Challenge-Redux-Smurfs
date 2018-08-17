import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  // addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurf: false,
  error: null,
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
    return Object.assign({}, state, {
      fetchingSmurfs: true,
    });

    case FETCHED:
    return Object.assign({}, state, {
      fetchingSmurfs: false,
      fetchedSmurfs: true,
      smurfs: action.payload,
    });

    case ERROR:
    return Object.assign({}, state, {
      fetchingSmurfs: false,
      fetchedSmurfs: false,
      error: action.payload,
    });

    default:
    return state;
  }
};  