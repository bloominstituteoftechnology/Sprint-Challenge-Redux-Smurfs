import { FETCHING, FETCHED, ADDING, ADDED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
      case FETCHING:
          return {...state, fetchingSmurfs: true };
      case FETCHED:
          return {...state, smurfs: action.smurfs, fetchingSmurfs: false, error: null}
      case ADDING:
          return {...state, addingSmurf: true};
      case ADDED:
          return {...state, smurfs: action.smurfs, addingSmurf: false, error: null};
      case UPDATING:
          return {...state, updatingSmurf: true};
      case UPDATED:
          return {...state, smurfs: action.smurfs, updatingSmurf: false, error: null};
      case DELETING:
          return {...state, deletingSmurfs: true};
      case DELETED:
          return {...state, smurfs: action.smurfs, deletingSmurfs: false, error: null};
      case ERROR:
          return {...state, error: action.errorMessage};
      default:
          return state;
  }
};