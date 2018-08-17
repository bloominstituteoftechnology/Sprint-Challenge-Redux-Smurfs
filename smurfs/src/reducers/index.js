import { FETCHING_SMURFS, FETCHED_SMURFS, ADDED_SMURF, ADDING_SMURF } from '../actions/index';


 const initState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };

export const smurfReducer = (state = initState, action) => {
  switch(action.type){
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case FETCHED_SMURFS:
      return Object.assign({}, state, {
        smurfs: [ ...state.smurfs, ...action.payload ],
        fetchingSmurfs: false
      });
    case ADDING_SMURF:
      return Object.assign({}, state, { addingSmurf: true });
    case ADDED_SMURF:
      return Object.assign({}, state, {
        smurfs: [ ...state.smurfs, action.payload ],
        addingSmurf: false
      });
    default:
      return state;
  }
}


