import {FETCHING_SMURFS, ADDING_SMURF, UPDATING_SMURF, FETCHED_SMURFS} from '../actions';

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: true
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };

    case ADDING_SMURF:
      return { ...state, addingSmurf: true };

    case UPDATING_SMURF:
      return { ...state, updatingSmurf: true };

    // handle get and post 
    case FETCHED_SMURFS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };

    default:
      return state;
  }
};
