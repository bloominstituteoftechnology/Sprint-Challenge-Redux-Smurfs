/*
  Be sure to import in all of the action types from `../actions`
*/
import {
FETCHING_SMURF,
ADDING_SMURF,
UPDATING_SMURF,
DELETING_SMURF
} from '../actions';


 const initialState = {
   smurfs: [],
   fetchingSmurf: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };
 
 export const smurfReducer = (state = initialState, action) => {
   switch (action.type) {
    case FETCHING_SMURF:
      return Object.assign({}, state, { fetching: true});
    case   ADDING_SMURF:
      return Object.assign({}, state, { fetching: false, error: action.payload });
    case UPDATING_SMURF:
      return Object.assign({}, state, { fetching: false, fetched: true, smurf: [...state.smurf, ...action.payload] });
    case DELETING_SMURF:
      return Object.assign({}, state, { fething: false, fetched: true,  smurf: [] });
    default:
      return state;
   }
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
