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
    case actionTypes.ADDING_SMURF:
      return { ...state, addingSmurf: false };
    case actionTypes.UPDATING_SMURF:
      return { ...state, updatingSmurf: true };
    
    case actionTypes.DELETING_SMURF:
      return { ...state, deletingSmurf: true };
    
    case actionTypes.ERROR:
      return {
        ...state,
        gettingFriends: false,
        creatingFriend: false,
        deletingFriend: false,
        updatingFriend: false,
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
