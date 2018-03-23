//reducers
// I found a different way to do reducers but I'm not sure if it is correct. It seems too easy. 




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
   error: true
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
import {ADD_SMURF, GET_SMURFS, UPDATE_SMURF, DELETE_SMURF} from '../actions/index.js';
export default function(state=[], action) {
  switch (action.type) {
      case GET_SMURFS:
      return action.payload;

    case ADD_SMURF:
    return [action.payload, ...state];
  
    case UPDATE_SMURF:
    return state.map(smurf => {
      if(smurf.name ===action.payload.name) {
        return action.payload;
      }
      return smurf;
    });
    case.DELETE_SMURF:
    return state.filter(smurf => smurf.name !==action.payload.name);

    default:
    return state;
  }
}