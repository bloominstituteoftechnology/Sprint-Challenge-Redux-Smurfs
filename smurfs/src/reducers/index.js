import { FETCHING, FETCHED, ADDING, ADDED, UPDATING, UPDATED, DELETING, DELETED, ERROR} from '../actions';

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 }

 export default (state = initialState, action) => {
   switch(action.type) {
    case FETCHING:
      return {...state, fetchingSmurfs: true}
    case FETCHED:
      return {...state, fetchingSmurfs: false, smurfs: action.smurfs};
    case ERROR:
      return {...state, error: action.error};
    case DELETING:
      return {...state, deletingSmurf: true }
    case DELETED:
      return {...state, deletingSmurfs: false}
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
