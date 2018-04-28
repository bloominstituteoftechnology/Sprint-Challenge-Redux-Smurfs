import { PENDING, ERROR, SUCCESS, UPDATING } from '../actions';

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null,
   smurf: {},
}

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case SUCCESS:
      return Object.assign({}, state, {
        smurfs: action.smurfs,
        fetchingSmurfs: false
      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.error,
        fetchingSmurfs: false
      });
    case UPDATING:
      return Object.assign({}, state, {
        updating: true,
        smurf: action.smurf
      });
    default:
      return state;
  }

}

export default smurfReducer;