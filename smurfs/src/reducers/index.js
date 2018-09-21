import { FETCHING_SMURF, SMURF_FETCHED, FETCHING_ERROR, ADDING_SMURF, SMURF_ADDED } from '../actions';

const initialState = {
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {fetchingSmurfs:true});

    case SMURF_FETCHED:
      return Object.assign({}, state, {
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false
      });

    case FETCHING_ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: 'Sorry, we encountered an error.'
      });

    case ADDING_SMURF:
      return {...state, addingSmurf: true };

    case SMURF_ADDED:
      return {...state, addingSmurf: false, smurfs: action.payload };

    default:
      return state;
  }
}
