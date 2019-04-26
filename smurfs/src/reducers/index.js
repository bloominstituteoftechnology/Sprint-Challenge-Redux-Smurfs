/*
  Be sure to import in all of the action types from `../actions`
*/
import { LOADING, SUCCESS, ERROR } from '../actions/index'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this*/
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state=initialState, action) => {
  switch(action.type){
    case LOADING:
      return {...state, fetchingSmurfs: true}
    case SUCCESS:
      return {...state, smurfs: action.smurfs, fetchingSmurfs: false, error: null}
    case  ERROR:  
      return {...state, error: action.payLoad, fetchingSmurfs: false}
    default:
      return state
  }
}