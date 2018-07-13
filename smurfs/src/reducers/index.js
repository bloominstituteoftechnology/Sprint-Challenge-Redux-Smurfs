/*
  Be sure to import in all of the action types from `../actions`
*/
import {GET_SMURFS, ADD_SMURF } from '../actions';


  let initialState = {
   smurfs: [],
   fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null,
  }

 const rootReducer = (state = initialState, action) => {
 switch(action.type) {
   default:
   return state;
 }
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default rootReducer;