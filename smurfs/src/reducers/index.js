/*
  Be sure to import in all of the action types from `../actions`
*/

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

import { PENDING, SUCCESS, ERROR} from '../actions';

const intialState = {
  smurfs: [],
  pending: false,
  success: false,
  error: null
}

export default (state = intialState, action) => {
  switch(action.type) {
    case PENDING:
      return { ...state, pending: true };
    case SUCCESS:
      return { ...state, smurfs: action.payload };
    case ERROR:
      return state;

    default:
      return state;
  }
};
