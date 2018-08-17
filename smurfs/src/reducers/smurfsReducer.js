import { FETCHING, FETCHED, ERROR, SAVING_DATA, SAVED_DATA } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
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

    case SAVED_DATA:
    return Object.assign({}, state, {
      addingSmurf: false,
      smurfs: action.payload,
    })

    case SAVING_DATA:
    return Object.assign({}, state, {
      addingSmurf: true,
    })

    default:
    return state;
  }
};  