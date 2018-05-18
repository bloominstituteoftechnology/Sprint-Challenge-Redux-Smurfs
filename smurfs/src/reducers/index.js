 import { FETCHING_SMURFS,  FETCHED_SMURFS, ERROR_FETCHING } from  '../actions';
 

/*
  Be sure to import in all of the action types from `../actions`
*/
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
 const initialState = {
   smurfs: [], fetchingSmurfs: false, addingSmurf: false,  updatingSmurf: false, deletingSmurf: false,
   error: null
 }

 export const smurfsReducer = (state = initialState, action) => {
   switch(action.type) {
     case FETCHING_SMURFS:
     return Object.assign({}, state, {fetchingSmurfs: true})
     case FETCHED_SMURFS:     
     return Object.assign({}, state, {smurfs: state.smurfs.concat(action.payload), fetchingSmurfs: false})
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
