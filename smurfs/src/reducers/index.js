import { FETCHING_SMURFS, SUCESS } from '../actions';

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
    return Object.assign({}, state, { fetchingSmurfs: true });
  case SUCESS:
    return Object.assign({}, state, { smurfs: action.payload });
  default:
    return state;
  }
}