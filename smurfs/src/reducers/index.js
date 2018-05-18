import {
  SMURF_FETCHED,
  FETCHING_SMURF,
  ERROR 
} from '../actions/index';

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case SMURF_FETCHED:
      return Object.assign({}, state, {
        smurfs: state.smurfs.concat(action.payload),
        fetchingSmurf: false,
        addingSmurf: true
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: action.payload
      });
    default:
      return state;
    };
  };
export default smurfReducer;