import { FETCHING_SMURFS, SMURF_FETCHED, ADDING_SMURF, SMURF_ADDED, UPDATING_SMURF, SMURF_UPDATED, DELETING_SMURF, SMURF_DELETED, ERROR } from '../actions';


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfFetched: false,
  addingSmurf: false,
  smurfAdded: false,
  updatingSmurf: false,
  smurfUpdated: false,
  deletingSmurf: false,
  smurfDeleted: false,
  error: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });

    case SMURF_FETCHED:
      return;

    case ADDING_SMURF:
      return;

    case SMURF_ADDED:
      return;

    case UPDATING_SMURF:
      return;

    case SMURF_UPDATED:
      return;

    case DELETING_SMURF:
      return;

    case SMURF_DELETED:
      return;

    case ERROR:
      return;

    default:
      return state;
  }
}