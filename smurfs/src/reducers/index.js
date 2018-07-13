import { FETCHING_SMURFS, FETCHED_SMURFS, ADDING_SMURF, ADDED_SMURF, UPDATING_SMURF, UPDATED_SMURF, DELETING_SMURF, DELETED_SMURF, ERROR } from '../actions';


const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   fetchedSmurfs: false,
   addingSmurf: false,
   addedSmurf: false,
   updatingSmurf: false,
   updatedSmurf: false,
   deletingSmurf: false,
   deletedSmurf: false,
   error: null
 };

 export const rootReducer = (state = initialState, action) => {
   switch (action.type) {
    case FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true};
    case FETCHED_SMURFS:
      return {...state, fetchingSmurfs: false, fetchedSmurfs: true, smurfs: action.payload };
    
    case ADDING_SMURF:
      return {...state, addingSmurf: true};
    case ADDED_SMURF:
      return {...state, addingSmurf: false, addedSmurf: true, smurfs: action.payload };
    
    case UPDATING_SMURF:
      return {...state, updatingSmurf: true};
    case UPDATED_SMURF:
      return {...state, updatingSmurf: false, updatingSmurf: true, smurfs: action.payload };
    
    case DELETING_SMURF:
      return {...state, deletingSmurf: true};
    case DELETED_SMURF:
      return {...state, deletingSmurf: false, deletedSmurf: true, smurfs: action.payload };
    
    case ERROR:
      return{...state, error: action.payload};
    
    default:
      return state;
   }
 };

 export default (state = initialState, action) => {
   return state;
 };

//  export default rootReducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
