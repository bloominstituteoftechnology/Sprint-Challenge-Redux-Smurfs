import {
  FETCHING,
  CREATING,
  UPDATING,
  DELETING,
  SUCCESS,
  ERROR,
} from '../actions/types'

const defaultState = {
  smurfs: [],
  pending: false,
  error: null,

}

export const smurfReducer = (state = defaultState, action) => {
  console.log('action:', action)
  switch(action.type) {
  case FETCHING:
    return { ...state, pending: true }
  case SUCCESS:
    return { ...state, smurfs: action.payload }
    

  default:
    return state
  }
}

/*
  Be sure to import in all of the action types from `../actions`
*/

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
