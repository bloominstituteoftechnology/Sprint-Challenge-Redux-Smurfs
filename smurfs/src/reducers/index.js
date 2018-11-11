/*
  Be sure to import in all of the action types from `../actions`
*/
import {LOADING, ERROR, SUCCESS, ADD_SMURF, DELETE_SMURF } from '../actions';
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
  loading: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  name: "Tom helping me"
}
export default(previousState = initialState, action) => {
   switch(action.type) {
      case LOADING:
        return Object.assign({}, previousState, {loading:true}) 

      case SUCCESS:
        return Object.assign({}, previousState, {smurfs:action.payload, loading:false})  
        
      case ADD_SMURF:
        return Object.assign({}, previousState, {smurfs:action.payload, addingSmurf:true, loading:false}) 
      
      case DELETE_SMURF:
        return Object.assign({}, previousState, {smurfs:action.payload, deletingSmurf:true, loading:false})  
        
      case ERROR:
        return Object.assign({}, previousState, {error:action.payload, loading:false})
      
      

      default:
          return previousState  
   }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
