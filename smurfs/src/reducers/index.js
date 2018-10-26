/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING, 
  SUCCESS, 
  FAILURE, 
  ADDING, 
  ADDED, 
  FAILED_ADD
} from '../actions/';


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
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
        return {
              ...state,
              fetchingSmurfs: true
          }
      case SUCCESS:
          return {
              ...state,
              smurfs: [
                  ...state.smurfs,
                  ...action.payload
              ],
              fetchingSmurfs: false
          }
      case FAILURE:
          return {
              ...state,
              fetchingSmurfs: false,
              error: action.payload
          }
      case ADDING:
          return {
              ...state,
              addingSmurf: true,
          }
      case ADDED:
          return {
              ...state,
              addingSmurf: false,
              smurfs: [
                  ...action.payload
              ]
          }
      case FAILED_ADD:
          return {
              ...state,
              savingSmurfs: false,
              error: action.payload
          }
  }
}
