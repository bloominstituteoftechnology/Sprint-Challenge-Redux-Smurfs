import { FETCHED, FETCHING, POSTING, POSTED, DELETED, DELETING, ERROR } from '../actions';
/*
  Be sure to import in all of the action types from `../actions`
*/
const initialState = {
  smurfs: [],
  posting: false,
  fetching: false,
  deleting: false,
  error: null,
}
/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: null
 }
*/
export default (state = initialState, action) => {
  switch (action.type){
    case FETCHING:
        return { ...state, fetching: true };
    case FETCHED:
        return { ...state, smurfs: action.smurfs, fetching: false, error: null };
    case POSTING:
        return { ...state, posting: true };     
    case POSTED:
        return { ...state, smurfs: action.smurfs, posting: false, error: null };
    case DELETING:
        return { ...state, deleting: true };
    case DELETED:
        return { ...state, smurfs: action.smurfs, deleting: false, error: null };
    case ERROR:
        return { ...state, error: action.errorMessage };                
    default:
        return state;        
  }
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
