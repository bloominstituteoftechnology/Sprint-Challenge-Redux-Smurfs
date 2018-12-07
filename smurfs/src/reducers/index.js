/*
  Be sure to import in all of the action types from `../actions`
*/
import { ADDING_SMURF, ADDED_SMURF, GETTING_SMURF, GOT_SMURF, ERROR, } from '../actions'
import { combineReducers } from 'redux';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this

*/
const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  gotSmurfs: false,
  addedSmurf: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
 const smurfReducer = (prevState = initialState, action)=>{
  switch(action.type){
    case ADDING_SMURF: return {...prevState, addingSmurf: true}
    case ADDED_SMURF: return {...prevState, addedSmurf: true, smurfs: action.payload}
    case GETTING_SMURF: return {...prevState, gettingSmurfs: true,}
    case GOT_SMURF: return {...prevState, smurfs: action.payload}
    case ERROR: return {...prevState, error: action.payload}
    default: return prevState;
  }
}

export default combineReducers({
  smurfReducer
})