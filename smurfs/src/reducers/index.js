import { FETCHED, FETCHING, SAVE, FAIL, SAVED } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
    return Object.assign({}, state, { fetchingSmurfs: true })
    case FETCHED: 
    return Object.assign({}, state, {
      smurfs: [...state.smurfs, ...action.payload]
    })
    case FAIL:
    return Object.assign({}, state, {
      error: action.payload
    })
    case SAVE: 
    return Object.assign({}, state, {
      smurfs: [...action.payload],
      addingSmurf: false
    })
    case SAVED: 
    return {
      ...state,
      smurfs: [...action.payload],
      fetchingSmurfs: false
    }
    default:
    return state;
  }
}
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
