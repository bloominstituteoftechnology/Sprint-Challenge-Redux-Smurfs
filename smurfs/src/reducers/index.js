/*
  Be sure to import in all of the action types from `../actions`
*/
import { PENDING_SMURFS, SUCCESS_SMURFS, ERROR_SMURFS} from '../actions';
/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: null
 }
*/
const initialState = {
  pending: false,
  error: null,
  smurfs: []
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case PENDING_SMURFS:
      return Object.assign({}, state, { pending: true });
    case SUCCESS_SMURFS:
      return Object.assign({}, state, { pending: false, smurfs: [...action.payload] });
    case ERROR_SMURFS:
      return Object.assign({}, state, { pending: false, error: action.payload });
    default:
      return state;
  }
};

export default smurfsReducer;