import { FETCHING_SMURF, FETCHED_SMURF, ERROR, ADD_SMURF } from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurf: false,
  addingSmurf: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURF:
      return Object.assign({}, state, {
        fetchingSmurfs: true
      });
    case FETCHED_SMURF:
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
    default: 
    return state;
  }
};
