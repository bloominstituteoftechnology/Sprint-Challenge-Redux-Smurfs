/*
  Be sure to import in all of the action types from `../actions`
*/
import { GETTING_SMURFS, GOT_SMURFS, ADDING_SMURF, ADDED_SMURF, ERROR } from '../actions';

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
  fetchedSmurfs: false,
  addingSmurf: false,
  addedSmurf: false,
  updatingSmurf: false,
  updatedSmurf: false,
  deletingSmurf: false,
  deletedSmurf: false,
  error: false,
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETTING_SMURFS:
      return {...state, fetchingSmurfs: true};
    case GOT_SMURFS:
      return {...state, smurfs: action.payload, fetchingSmurfs: false, fetchedSmurfs: true};
    case ADDING_SMURF:
      return {...state, addingSmurf: true, fetchingSmurfs: false};
    case ADDED_SMURF:
      return {...state, smurfs: action.payload, addingSmurf: false, addedSmurf: true};
    case ERROR:
      return {...state, error: true}
    default:
      return state;
  }
}