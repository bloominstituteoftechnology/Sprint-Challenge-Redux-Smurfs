/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING_SMURFS, FETCHED_SMURF, ERROR_FETCHING} from "./allActions";
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
const initialState = {
  smurfs: [], fetchingSmurfs: false , fetchedSmurfs: false ,addingSmurf: false,
   updatingSmurf: false, deletingSmurfs: false,
   error: null 
}

const smurfsReducer = (state=initialState, action)=>{
  switch(action.type){
    case FETCHING_SMURFS:
        return Object.assign({}, state, { fetchingSmurfs: true});
    case FETCHED_SMURF:
        return Object.assign({}, state, { smurfs: [...initialState.smurfs, ...action.payload],
        fetchingSmurfs: false, fetchedSmurfs: true })
    case ERROR_FETCHING:
        return "fetching Error Try again plz..."
    default:
    return state
  }

}
export {smurfsReducer};


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespaced issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
