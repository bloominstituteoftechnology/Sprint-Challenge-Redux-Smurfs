/*
  Be sure to import in all of the action types from `../actions`
*/

import {ADD_SMURF} from '../actions';
import {FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL} from '../actions'

const initialState=
 {
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

const smurfReducer = (state=initialState, action) => {
  switch(action.type){
    case FETCH_SMURFS:
      return {...state, fetchingSmurfs: true}
    case FETCH_SMURFS_SUCCESS:
      return {...state, fetchingSmurfs: false, smurfs: action.payload}
    case FETCH_SMURFS_FAIL:
      return {...state, fetchingSmurfs: false, error: action.payload}
    case ADD_SMURF:
      return {...state, addingSmurf:true, smurfs:action.payload}
    default:
      return state
  }
}

export default smurfReducer