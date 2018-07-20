import { FETCHING_SMURFS, FETCHED, ERROR, ADDING_SMURF, DELETING_SMURF } from '../actions';

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
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
  case ADDING_SMURF:
      return { ...state, fetchingSmurfs: false,
      deletingSmurf: false,
      updatingSmurf: false,
      error: null,
      addingSmurf: true}
  case DELETING_SMURF:
      return { ...state, deletingSmurf: true }
  default: 
    return state;
  }
}