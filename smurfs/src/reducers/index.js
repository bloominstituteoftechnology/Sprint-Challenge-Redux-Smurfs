import {
  FETCHING_SMURFS, 
  FETCHED_SMURFS, 
  ADDING_SMURF, 
  ADDED_SMURF, 
  ERROR 
} from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   fetchedSmurfs: false,
   addingSmurf: false,
   addedSmurf: false,
  //  updatingSmurf: false,
  //  deletingSmurf: false,
   error: null
 };

const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
      });
    case FETCHED_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        smurfs: state.smurfs.concat(action.payload),
      });
    case ADDING_SMURF:
      return Object.assign({}, state, {
        fetchedSmurfs: false,
        addingSmurf: true,
        addedSmurf: false,
      });
    case ADDED_SMURF:
      return Object.assign({}, state, {
        fetchedSmurfs: false,
        addingSmurf: false,
        addedSmurf: true,
        smurfs: action.payload,
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        fetchedSmurfs: false,
        addingSmurf: false,
        addedSmurf: false,
        error: action.payload,
      });
    default:
      return state;
  }
};

export default smurfReducer;