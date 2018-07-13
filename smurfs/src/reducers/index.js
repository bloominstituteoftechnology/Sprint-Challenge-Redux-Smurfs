/*
  Be sure to import in all of the action types from `../actions`
*/
import * as actionTypes from '../actions';


//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };

 export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
      case actionTypes.FETCH_SMURFS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };
    case actionTypes.ADDING_SMURF:
      return { ...state, addingSmurf: false };
      case actionTypes.ADD_SMURF:
      return { ...state, smurfs: action.payload, addingSmurf: false };
    case actionTypes.UPDATING_SMURF:
      return { ...state, updatingSmurf: true };
      case actionTypes.UPDATE_SMURF:
      return { ...state, smurfs: action.payload, updatingSmurf: false };
    
    case actionTypes.DELETING_SMURF:
      return { ...state, deletingSmurf: true };
      case actionTypes.DELETE_SMURF:
      return { ...state, smurfs: action.payload, deletingSmurf: false };
    
    case actionTypes.ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
