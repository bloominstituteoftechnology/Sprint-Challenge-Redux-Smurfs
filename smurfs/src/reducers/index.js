import { FETCHING_SMURFS, FETCHED_SMURFS, ERROR_FETCHING_SMURFS } from '../actions';

  const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   fetchedSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { 
        fetchingSmurfs: true,
        fetchedSmurfs: false,
        error: null,
      });
    case FETCHED_SMURFS:
      return Object.assign({}, state, {
        smurfs: action.payload,
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        error: null,
      });
    case ERROR_FETCHING_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: action.payload,
        fetchedSmurfs: false,
      });
    default:
      return state;
  }
}

