import {
  RECEIVING_SMURFS,
  RECEIVED_SMURFS, 
  ERROR_RECEIVING,
  ADDING_SMURF,
  ADDED_SMURF,
  ERROR_ADDING,
} from '../actions';

const initialState = {
   smurfs: [],
   receivingSmurfs: false,
   receivedSmurfs: false,
   addingSmurf: false,
   addedSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null,
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVING_SMURFS: 
      return {...state, receivingSmurfs: true};
    case RECEIVED_SMURFS:
      return {...state, receivingSmurfs: false, receivedSmurfs: true, smurfs: action.payload};
    case ERROR_RECEIVING:
      return {...state, receivingSmurfs: false, error: true};
    case ADDING_SMURF: 
      return {...state, addingSmurf: true};
    case ADDED_SMURF:
      return {...state, addingSmurf: false, addedSmurf: true, smurfs: action.payload};
    case ERROR_ADDING:
      return {...state, addingSmurf: false, error: true};
    default:
      return state;
  }
};
