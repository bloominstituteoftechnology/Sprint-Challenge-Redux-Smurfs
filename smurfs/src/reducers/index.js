/*
  Be sure to import in all of the action types from `../actions`
*/
import { LOADING, SUCCESS, ERROR } from '../actions'


 //Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: [],
   error: null,
   loading: false
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch(action.type) {
    case LOADING: 
      return Object.assign({}, state, {loading: true});
    case SUCCESS: 
      return Object.assign({}, state, {smurfs: action.smurfs, loading: false, error: null});
    case ERROR:
      return Object.assign({}, state, {error: action.message, loading: false});
    default:
      return state;
  }
}
