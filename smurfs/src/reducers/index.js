/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURF, ADDING_SMURF, UPDATING_SMURF, DELETING_SMURF, SUCCESS_SMURFS, ERROR_SMURFS } from "../actions"

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurfs: false,
    error: null
}
  
const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCHING_SMURF:
      return Object.assign({}, state, {fetchingSmurfs: true})

    case ADDING_SMURF:
      return Object.assign({}, state, {addingSmurf: true})

    case UPDATING_SMURF:
      return Object.assign({}, state, {updatingSmurf: true})

    case DELETING_SMURF:
      return Object.assign({}, state, {deletingSmurfs: true})

    case SUCCESS_SMURFS:
      return Object.assign({}, state, {fetchingSmurfs: false, addingSmurf: false, updatingSmurf: false, deletingSmurfs: false, friends: [...action.payload] })

    case ERROR_SMURFS:
      return Object.assign({}, state, {fetchingSmurfs: false, addingSmurf: false, updatingSmurf: false, deletingSmurfs: false, error: action.payload })

    default:
    return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
