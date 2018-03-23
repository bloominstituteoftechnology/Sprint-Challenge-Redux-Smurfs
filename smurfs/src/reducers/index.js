/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, FETCHED, ADDING, ADDED, DELETING, DELETED, ERROR } from '../actions/index';



 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 }


 
 const rootReducer = (state = initialState, action) => {

    switch (action.type) {
      case FETCHING: 
        return { ...state, fetchingSmurfs: true}

      case FETCHED:
        return {...state, smurfs: action.smurfs, fetchingSmurfs: false}

      case ADDING:
        return {...state, addingSmurf: true}
        
      case ADDED:
        return {...state, smurfs: action.smurfs, addingSmurf: false}

      case DELETING:
        return {...state, deletingSmurfs: true}

      case DELETED:
        return { ...state, smurfs:action.smurfs, deletingSmurfs: false }

      /* case ADDED:
        return {...state, smurfs: action.smurfs, addingSmurf: false}
        break;
        
      case ADDED:
        return {...state, smurfs: action.smurfs, addingSmurf: false}
        break; */

      case ERROR:
        return {
          ...state, 
          fetchingSmurfs: false,
          addingSmurf: false,
          error: action.errorMessage
        }

      default:
        return state;
    }

};

export default rootReducer;
 




/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
