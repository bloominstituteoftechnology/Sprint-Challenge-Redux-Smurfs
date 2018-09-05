import {CREATING, READING, UPDATING, DELETING } from  '../actions';
import {CREATE, READ, UPDATE, DELETE } from  '../actions';
/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  creatingSmurf: false,
  readingSmurfs: false,
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


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case CREATE:
      return Object.assign({}, state, {
        smurfs: state.smurfs.concat(action.payload),
        creatingSmurf: false
      });
    
    case READ:
      return Object.assign({}, state, {
        smurfs: state.smurfs.concat(action.payload),
        readingSmurfs : false
      });

    case UPDATE:
      return Object.assign({}, state, {
        smurfs: state.smurfs.concat(action.payload),
        updatingingSmurfs : false
      });

    case CREATING:
      return Object.assign({}, state, { creatingSmurf: true });
    case READING:
      return Object.assign({}, state, { readingSmurfs: true });
    case UPDATING:
      return Object.assign({}, state, { updatingSmurf: true });
    case DELETING:
      return Object.assign({}, state, { deletingSmurf: true });
    default:
      return state;
  }
};