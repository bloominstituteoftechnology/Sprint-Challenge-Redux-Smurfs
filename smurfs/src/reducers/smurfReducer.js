import {
    FETCHING_SMURF,
    FETCHED_SMURF,
    ERROR_FETCHING_SMURF,
    ADDING_SMURF,
    ADDED_SMURF

 } from '../actions'
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}
const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF:
       return {...state , fetchingSmurfs : true }
    case FETCHED_SMURF:
       return {...state, smurfs : action.payload , fetchingSmurfs : false }
    case ERROR_FETCHING_SMURF:
        return {...state, error : action.payload}
    case ADDING_SMURF:
        return {...state, addingSmurf : true  }
    case ADDED_SMURF :
        return {...state, smurfs : action.payload , fetchingSmurfs : false }
    default:
    return state;
  }
}
export default smurfReducer


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.import { GET_SMURF } from '../actions/index';

  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


/*
  Be sure to import in all of the action types from `../actions`
*/