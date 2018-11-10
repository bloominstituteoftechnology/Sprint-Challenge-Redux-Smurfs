/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING, UPDATING, ERROR, CREATING, DELETING } from '../actions';

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
  fetching: false,
  adding: false,
  updating: false,
  deleting: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default ( state = initialState, action ) => {
  switch( action.type ) {
    case FETCHING:
      return Object.assign( {}, state, {fetching: true} );

    case UPDATING:
      return Object.assign( {}, state, {
        smurfs: action.smurfs,
        fetching: false,
        error: null
      });

    case ERROR:
      return Object.assign( {}, {error: action.errMsg, loading: false});

    case CREATING:
    case DELETING:
    default:
      return state;
  }
};