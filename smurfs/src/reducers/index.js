/*
  Be sure to import in all of the action types from `../actions`
*/
import {
 FETCHING_SMURFS,
 SMURFS_FETCHED,
 ERROR,
 CREATING_SMURF,
 SMURF_CREATED
} from '.actions/index.js';
/*Your initial/default state for this project could *Although does not have to* look a lot like this*/
const initialState = {
   smurfs: [],
   fetchSmurfs: false,
   addSmurf: false,
   error: null
 };

 export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case FETCHING_SMURFS:
          return Object.assign({}, state, { fetchSmurf: true });
    case ERROR:
          return Object.assign({}, state, { 
            fetching: false, 
            error: action.payload 
          });
    case SMURFS_FETCHED:
        return Object.assign({}, state, {
          smurfs: state.smurfs.concat(action.payload),
          fetching: false
        });
    case CREATING_SMURF:
          return Object.assign({}, state, { addSmurf: true});
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
