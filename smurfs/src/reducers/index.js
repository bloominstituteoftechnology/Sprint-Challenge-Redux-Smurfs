import { GETSMURFS, POSTSMURFS } from "../actions";


const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
    switch(action.type) {
    case GETSMURFS:
      return { ...state, smurfs: action.smurfs };
    case POSTSMURFS:
      return { ...state, smurfs: action.smurfs };
      default:
      return state;
    }
  }