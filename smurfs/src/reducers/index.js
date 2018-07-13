/*
  Be sure to import in all of the action types from `../actions`
*/
import {GET_SMURFS, GETTING_SMURFS, ADD_SMURF } from '../actions';


  const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null,
  };

 export const rootReducer = (state = initialState, action) => {
 switch(action.type) {
   case GETTING_SMURFS:
   return Object.assign({}, state, {updatingSmurf: true});
   case GET_SMURFS:
   return Object.assign({}, state, {smurfs: action.payload, updatingSmurf: false,} );
   default:
   return state;
 }
}

export default rootReducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
