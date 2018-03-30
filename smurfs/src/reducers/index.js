/*
  Be sure to import in all of the action types from `../actions`
*/
import * as actions from '../actions';
 

// Your initial/default state for this project could look a lot like this
 
   const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 }
 /*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
  case actions.FETCHINGSMURF:
       return {...state, fetchingSmurfs: true};
   case actions.SMURFSFETCHED:
        return {...state, fetchingSmurfs: false, smurfs: action.payload};
case actions.ERRORFETCHINGSMURFS:
        return {...state, fetchingSmurfs:false, error: action.payload};
  case actions.ADDINGSMURF:
       return {...state, addingSmurf: true};
   case actions.SMURFADDED:
        return {...state, addingSmurf: false, smurfs: action.payload};
   case actions.ERRORADDINGSMURF:
        return {...state, addingSmurf: false, error: action.payload};
      default:
        return state;
    }
  } 