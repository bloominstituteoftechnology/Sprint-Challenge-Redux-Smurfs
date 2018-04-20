import {FETCHING, POSTING, ERROR, FETCHED} from "../actions"

//  Your initial/default state for this project could look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
  //  addingSmurf: false,
  //  updatingSmurf: false,
  //  deletingSmurfs: false,
   error: null,
   posting: false,
   fetched: false
 }

 const smurfReducer = (state = initialState, action) => {
   switch (action.type) {
     case FETCHING: {
       return {...state, fetchingSmurfs: true}
     }
     case FETCHED: {
       return {...state, fetchingSmurfs: false, fetched: true, smurfs: action.payload}
     }
     case POSTING: {
      return{ ...state, posting: true}
    }
    case ERROR: {
      return {...state, fetching: false, error: action.payload}
    }
    default: return state;
   }
 }

 export default smurfReducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
