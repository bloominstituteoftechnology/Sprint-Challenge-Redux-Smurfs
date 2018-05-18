import { PENDING_SMURFS, SUCCESS_SMURFS, ERROR_SMURFS } from "../actions";

const initialState = {
  pending: false,
  error: null,
  smurfs: []
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING_SMURFS:
      return Object.assign({}, state, { pending: true });
    case SUCCESS_SMURFS:
     console.log(action)
      return Object.assign({}, state, {
        pending: false,
        smurfs: action.payload
      });
    case ERROR_SMURFS:
      return Object.assign({}, state, {
        pending: false,
        error: action.payload
      });
    default:
      return state;
  }
};




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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
