import { FETCHING_SMURFS, FETCHED_SMURFS, ADDING_SMURF, SMURF_ADDED, ERROR } from '../actions';

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
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true,
      };
    case SMURF_ADDED:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
      }
    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        fetchedSmurfs: false,
        addingSmurf: false,
        smurfAdded: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

