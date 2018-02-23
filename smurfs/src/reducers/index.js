import {
  RECEIVING_SMURFS,
  RECEIVED_SMURFS, 
} from '../actions';

const initialState = {
   smurfs: [],
   receivingSmurfs: false,
   receivedSmurfs: false,
   addingSmurf: false,
   addedSmurf: true,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: true,
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVING_SMURFS: 
      return {...state, receivingSmurfs: true};
    case RECEIVED_SMURFS:
      return {...state, receivingSmurfs: false, receivedSmurfs: true, smurfs: action.payload};
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
