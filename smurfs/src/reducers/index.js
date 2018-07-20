import { FETCHING_SMURFS, FETCHED, ERROR } from '../actions';

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };

export default (state = initialState, action) => {
  switch(action.type) {
  case FETCHING_SMURFS:
    return { ...state, fetchingSmurfs: true };
  case FETCHED:
    return { ...state, fetchingSmurfs: false,
       updatingSmurf: false, 
       addingSmurf: false,
       deletingSmurf: false,
       error: null,
       smurfs: action.payload }
  case ERROR:
    return { ...state, error: action.payload }
  default: 
    return state;
  }
}