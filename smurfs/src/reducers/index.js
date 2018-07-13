import * as actionTypes from '../actions';


const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   success: false,
   error: null
 };

 export const rootReducer = (state = initialState, action) => {
   switch (action.type) {
    case actionTypes.FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true});
    case actionTypes.SUCCESS:
      return Object.assign({}, state, { 
        smurfs: action.payload, 
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false, 
        deletingSmurf: false,
        error: null
       });
    
    // case ADDING_SMURF:
    //   return {...state, addingSmurf: true};
    // case ADDED_SMURF:
    //   return {...state, addingSmurf: false, addedSmurf: true, smurfs: action.payload };
    
    // case UPDATING_SMURF:
    //   return {...state, updatingSmurf: true};
    // case UPDATED_SMURF:
    //   return {...state, updatingSmurf: false, updatingSmurf: true, smurfs: action.payload };
    
    // case DELETING_SMURF:
    //   return {...state, deletingSmurf: true};
    // case DELETED_SMURF:
    //   return {...state, deletingSmurf: false, deletedSmurf: true, smurfs: action.payload };
    
    case actionTypes.ERROR:
      return Object.assign({}, state,{error: action.payload});
    
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
