import { FETCHED, ERROR, FETCHING, ADD_SMURF, DELETE_SMURF } from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingSmurfs: true
      });
    case FETCHED:
      return Object.assign({}, initialState, {
        smurfs: action.smurfs
      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.errorMessage
      });
    case ADD_SMURF:
      return Object.assign({}, state, {
        addingSmurf: true,
        smurfs: []
      });
    case DELETE_SMURF:
      return Object.assign({}, state, {
        deletingSmurf: true,
        smurfs: []
      });
    default:
      return state;
  }
};
