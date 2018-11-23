/*
  Be sure to import in all of the action  from `../actions`
*/
import { FETCHING, ADDING, UPDATING, DELETING, FAILURE } from '../actions/index'


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
const initState = {
 smurfs: [],
 fetching: false,
 adding: false,
 updating: false,
 deleting: false,
 error: ''
}

export const reducer = (state = initState, action) => {
 switch(action){
  case FETCHING:
  return {}
  case ADDING:
  return {}
  case UPDATING:
  return {}
  case DELETING:
  return {}
  case FAILURE:
  return {}
  default:
  return state 
 }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
