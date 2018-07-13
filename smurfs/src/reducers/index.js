import { FETCHING, FETCHED, ADDING, ERROR } from '../actions';

const initialState = {
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  addingSmurf: false,
  smurfs: [],
  error: null
}

export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
        fetchedSmurfs: false,
        error: null
      });
    case FETCHED:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        addingSmurf: false,
        smurfs: action.payload,
      });
    case ADDING:
      return Object.assign({}, state, {
        addingSmurf: true
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: action.payload
      });
    default:
      return state;
  }
}