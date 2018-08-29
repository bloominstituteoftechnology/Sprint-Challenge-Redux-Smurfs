/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURFS,
  SUCCESS,
  ERROR, 
} from '../actions'

  // SMURFS_FETCHED,  
  // ADD_SMURF,
  // SMURF_ADDED,
  // UPDATING_SMURF,
  // SMURF_UPDATED

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this */

 const initialState =   // initial state
 {
   smurfs: [],  // empty object in the initial state
   fetchingSmurfs: false,   // fetching smurfs flag 
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {  // export default an anonymous function taking state as initialState and action   
  switch (action.type) {  // switch statement
  case FETCHING_SMURFS: // handle type: Fetching Smurfs
    return Object.assign({}, state, { fetchingSmurfs: true}); // return our Object of assign, new object extending all properties of state except return fetchingSmurfs as a boolean 
  case SUCCESS:
    return Object.assign({}, state, {
      smurfs: action.paylod,  // override the array
      fetchingSmurfs: false,  // sets the state back to false after fetching 
      updatingSmurf: false, 
      deletingSmurf: false, 
      addingSmurf: false, 
      error: null
    });
  case ERROR:
    return Object.assign({}, state, { error: action.paylod });
  default:
    return state; // return state 
  }
};


// export const smurfReducer = (state = initialState, action) => {
//   switch (action.type) {

//     case FETCHING_SMURFS:
//       return Object.assign({}, state, {
//         smurfs: state.smurfs.concat(action.payload),
//         fetchingSmurfs: true
//       }); 
//     case SMURFS_FETCHED:
//       return Object.assign({}, state, { 
//         fetchingSmurfs: false,
//         smurfs: action.payload
//       });

//     case ERROR: 
//       return Object.assign({}, state, {
//         fetchingSmurfs: false,
//         addingSmurf: false, 
//         error: action.payload   
//       }); 

//     case ADD_SMURF: 
//       return Object.assign({}, state, {addingSmurf: true});      
//     case SMURF_ADDED: 
//       return Object.assign({}, state, {
//         smurfs: action.payload, 
//         addingSmurf: false 
//       }); 

//     case UPDATING_SMURF:
//       return Object.assign({}, state, {updatingSmurf: true});
//     case SMURF_UPDATED:
//       return Object.assign({}, state, {
//         smurfs: action.payload,
//         updatingSmurf: false
//       });
    
//     default:
//       return state;
//   }
// }; 
