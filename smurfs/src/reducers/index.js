import { combineReducers } from "redux";
import { 
  FETCHINGSMURFS, 
  SMURFSFETCHED,
  ERROR,
  ADDINGSMURF
} from '../actions'
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

const initalState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsFetched: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const smurfReducer = (state = initalState, action) => {

  switch (action.type) {
    case FETCHINGSMURFS:
      return {
        ...state,
        smurfs: state.smurfs,
        fetchingSmurfs: true
      }
    case SMURFSFETCHED:
      console.log(SMURFSFETCHED, action)
      return {
        ...state,
        smurfsFetched: true,
        smurfs: action.data
      }
    case ADDINGSMURF:
      return {
        ...state,
        smurfs: action.data
      }
    case ERROR:
      return state
    default:
      return state;
  }
}

export default combineReducers({
  smurfReducer
})