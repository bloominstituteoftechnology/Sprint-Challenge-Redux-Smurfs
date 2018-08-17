import { FETCHING_SMURFS, GET_SMURFS, ADDING_SMURFS, SMURF_ADDED, ERROR } from '../actions';

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true};
    case GET_SMURFS:
      return {...state, fetchingSmurfs: false, smurfs: action.payload};
    case ADDING_SMURFS:
      return {...state, addingSmurf: true};
    case SMURF_ADDED:
      return {...state, addingSmurf: false, smurfs: action.payload};
    case ERROR:
      return {...state, error: action.payload};
    default:
      console.log('defaulted! ', state);
      return state;
  }
}
