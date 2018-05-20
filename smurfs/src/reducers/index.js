/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHED, FETCHING, SAVING, SAVED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from '../actions';

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

  fetching: false,
  fetched: false,

  saving: false,
  saved: false,

  updating: false,
  updated: false,

  deleting: false,
  deleted: false,

  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return Object.assign({}, state, {
                fetching: true,
                fetched: false,
            })
        case FETCHED:
            return Object.assign({}, state, {
                fetched: true, 
                fetching: false, 
                smurfs: action.payload
            })
        case SAVING:
            return Object.assign({}, state, {
                saving: true,
                saved: false
            })
        case SAVED: 
            return Object.assign({}, state, {
                saving: false,
                saved: true,
                smurfs: action.payload
            })
        case UPDATING:
            return Object.assign({}, state, {
                updating: true,
                updated: false
            })
        case UPDATED:
            return Object.assign({}, state, {
                updated: true,
                updating: false,
                smurfs: action.payload
            })
        case DELETING:
            return Object.assign({}, state, {
                deleted: false,
                deleting: true
            })
        case DELETED:
            return Object.assign({}, state, {
                deleted: true,
                deleting: false,
                smurfs: action.payload
            })
        case ERROR:
            return Object.assign({}, state, {
                fetching: false,
                editing: false,
                deleting: false,
                error: action.payload
            })
        default:
            return state;
    }
}

export default reducer;