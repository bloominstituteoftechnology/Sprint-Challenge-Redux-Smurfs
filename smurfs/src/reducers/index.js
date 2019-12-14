import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  ERROR
} from '../actions';

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
    case SMURFS_FETCHED:
      return Object.assign({}, state, {
        smurfs: state.smurfs.concat(action.payload),
        fetchingSmurfs: false
      })
    case ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: action.payload
      })
    default:
      return state;
  }
}
