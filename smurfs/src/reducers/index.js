import { SUCCESS_GET_SMURFS, SUCCESS_POST_SMURFS, PENDING_SMURFS, ERROR_SMURFS } from '../actions'; 


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

const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case PENDING_SMURFS:
      return Object.assign({}, state, {fetchingSmurfs: true})
    case SUCCESS_GET_SMURFS:
      return Object.assign({}, state, {smurfs: state.smurfs.concat(action.payload), fetchingSmurfs: false})
    case SUCCESS_POST_SMURFS:
      return Object.assign({}, state, {smurfs: (action.payload), addingSmurf: true })
    case ERROR_SMURFS:
      return Object.assign({}, state, {fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload})
    default: 
      return state;
  }
}

export default smurfsReducer;
