/*
  Be sure to import in all of the action types from `../actions`
*/
import { SMURFGETTING, SMURFGOT, ERROR, SMURFPOST, SMURFDELETE } from '../actions/';

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  updatingSmurfs: false,
  deletingSmurfs: false,
  error: null
}
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

export default (state = initialState, action) => {
  switch (action.type) {
    case SMURFGETTING:
      return {...state, gettingSmurfs: true};
    case SMURFGOT:
      return {...state, smurfs: action.smurfs, gettingSmurfs: false};

    case SMURFPOST:
      return {...state, smurfs: action.smurfs, gettingSmurfs: true};
      
     case SMURFDELETE:
      return {...state, smurfs: action.smurfs, error: null, getFriends: false}; 

    case ERROR:
      return {...state, error: action.errorMessage};
    default:
      return state
  }
}