/*
  Be sure to import in all of the action types from `../actions`
*/
import { GETTING_SMURFS, GOT_SMURFS } from '../actions';

/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: true
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: false,
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETTING_SMURFS:
      return {...state, fetchingSmurfs: true};
    case GOT_SMURFS:
      return {...state, smurfs: action.payload, fetchingSmurfs: false};
    default:
      return state;
  }
}