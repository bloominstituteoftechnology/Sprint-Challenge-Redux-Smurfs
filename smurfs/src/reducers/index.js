import { FETCHING_SMURFS, ADDING_SMURF, UPDATING_SMURF, DELETING_SMURF, ERROR } from '../actions';


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return;
      
    case FETCHING_SMURFS:
      return;

    case ADDING_SMURF:
      return;

    case UPDATING_SMURF:
      return;

    case DELETING_SMURF:
      return;

    case ERROR:
      return;

    default:
      return state;
  }
}