import { FETCHING_SMURFS, FETCHED_SMURFS, ADDING_SMURF, ADDED_SMURF, UPDATING_SMURF, UPDATED_SMURF, DELETING_SMURF, DELETED_SMURF, ERROR } from '../actions';


const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };

 export const rootReducer = (state = initialState, action) => {
   switch (action.type) {
    case FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true};
    case FETCHED_SMURFS:
      return {...state, smurfs: action.payload, fetchingSmurfs: false};
    
    case ADDING_SMURF:
      return {...state, addingSmurf:true};
    case ADDED_SMURF:
      return {...state, addingSmurf:true};
    
    case UPDATING_SMURF:
      return {...state, updatingSmurf: true};
    case UPDATED_SMURF:
      return {...state, updatingSmurf: true};
    
    case DELETING_SMURF:
      return {...state, deletingSmurf: true};
    case DELETED_SMURF:
      return {...state, deletingSmurf: true};
    
    case ERROR:
      return{...state, error: action.payload};
    
    default:
      return state;
   }
 };

 export default rootReducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
