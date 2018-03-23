/*
  Be sure to import in all of the action types from `../actions`
*/

import { SMURFING, SMURFED, SMURFINGANEWONE, ANEWONESMURFED, ERROR } from '../actions';

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

const noSmurfs = {
  smurfs: [],
  smurfing: false,
  addingSmurf: false,
  error: null,
};

const redSmurf = ( state = noSmurfs, action) => {
  switch (action.type) {
    case SMURFING:
      return{ ...state, smurfing: true};
    case SMURFED:
      return{ ...state, smurfs: action.smurfs, smurfing: false, error: null };
    case ERROR:
      return{ ...state, error: action.errorMessage }
    case SMURFINGANEWONE:
      return { ...state, addingSmurf: true }
    case ANEWONESMURFED:
      return { ...state, smurfs: action.smurfs, addingSmurf: false}

    default:
    return state
  }
    
}

export default redSmurf;