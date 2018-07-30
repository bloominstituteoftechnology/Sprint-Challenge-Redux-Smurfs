/*
  Be sure to import in all of the action types from `../actions`
*/

import {FETCHING, FETCHED, ADDING, ADDED, ERROR} from '../actions'

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
  fetching:false, 
  fetched: false,
  adding: false,
  added: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetching:true, 
        fetched: false,
        adding: false,
        added: false,
        error: null
      })
    case FETCHED:
      return Object.assign({}, state, {
        smurfs:action.payload,
        fetching:false, 
        fetched: true,
        adding: false,
        added: false,
        error: null
      })
    case ADDING:
      return Object.assign({}, state, {
        fetching:false, 
        fetched: false,
        adding: true,
        added: false,
        error: null
      })
    case ADDED:
      return Object.assign({}, state, {
        fetching:false, 
        fetched: false,
        adding: false,
        added: action.payload,
        error: null
      })
    case ERROR:
      return Object.assign({}, state, {
        fetching:false, 
        fetched: false,
        adding: false,
        added: true,
        error: action.payload
      })
    default: 
      return state;
  }
}