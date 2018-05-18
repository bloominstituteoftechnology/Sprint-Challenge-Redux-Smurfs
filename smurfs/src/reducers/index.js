/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  SMURFS_FETCHED,
  SMURFS_FETCHING,
  SMURFS_ADD,
  ERROR
} from '../actions';


//  Your initial/default state for this project could *Although does not have to* look a lot like this
 
let initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case SMURFS_FETCHING:
      return Object.assign({}, state, {fetchingSmurfs: true})
    case SMURFS_FETCHED:
      return Object.assign({}, state, {smurfs: state.smurfs.concat(action.payload), fetchingSmurfs: false})
    case SMURFS_ADD:
      return Object.assign({}, state, {smurfs: (action.payload), addingSmurf: true})
    case ERROR:
      return Object.assign({}, state, {fetchingSmurfs: false, addingSmurf: false, error: action.payload})
    default: 
      return state;
    }
}
export default smurfReducer;