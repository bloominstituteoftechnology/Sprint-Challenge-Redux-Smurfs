/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURFS, RECEIVED_SMURFS, ADDING_SMURF, ADDED_SMURF, ERROR } from '../actions'


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null,
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
 const smurfReducer = (state = initialState, action) => {
   switch (action.type) {
     case FETCHING_SMURFS:
       return { ...state, fetchingSmurfs: true, };
     case RECEIVED_SMURFS:
       return { ...state, smurfs: action.payload, fetchingSmurfs: false, };
     case ADDING_SMURF:
       return { ...state, addingSmurf: true, };
     case ADDED_SMURF:
       return { ...state, addingSmurf: false };
     case ERROR:
       return { ...state, error: action.payload, };
     default:
      return state;
   }
}

export default smurfReducer;
