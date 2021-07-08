
  import {FETCHED, FETCHING, POSTING, POSTED, ERROR} from  '../actions';


 const initalState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

export default (state = initalState, action) => {
  switch(action.type) {
    case FETCHING:
      return Object.assign({}, state, {fetching: true})
    case FETCHED:
      return Object.assign({}, state, {smurfs: state.smurfs.concat(action.payload), fetching: false })
    case POSTING:
      return Object.assign({}, state, { fetching: true })
    case POSTED:
      return Object.assign({}, state, { smurfs: action.payload, fetching: false, addingSmurf: true })
    case ERROR:
      return Object.assign({}, state,{error: action.payload})
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
