

import {GATHERING, SUCCESS, NEW, GONE, ERROR} from '../actions'
/*
  Be sure to import in all of the action types from `../actions`
*/


const initialState = {
  smurfs: [],
  gatheringSmurfs: false,
  newCitizen: false,
  updateSmurf: false,
  smurfIsGone: false,
  error: null,
}

export default (state = initialState, action) => {

    switch(action.type) {
        case GATHERING:
        return Object.assign({}, state, {gatheringSmurfs: true})
        case SUCCESS:
        return Object.assign({}, state, {smurfs: action.smurfs, gatheringSmurfs:false, error:null})
        case NEW:
        return Object.assign({}, state, {smurfs: action.smurfs, gatheringSmurfs:false, error: null, newCitizen: true})
        case GONE:
        return Object.assign({}, state, {smurfs: action.smurfs, gatheringSmurfs:false, error: null, smurfIsGone: true})
        case ERROR:
        return Object.assign({}, state, {error: action.errorMessage, gatheringSmurfs:false})
        default:
        return state
    }
}

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
