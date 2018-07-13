/*
  Be sure to import in all of the action types from `../actions`
*/
import { GOT_SMURFS, GETTING_SMURFS, ADD_SMURF, DELETING_SMURF, ERROR } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GETTING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case GOT_SMURFS:
      return {
        smurfs: action.smurfs,
        fetchingSmurfs: false,
        addingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      }
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.smurfs,
        addingSmurf: true
      }
    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true
      }
    case ERROR:
      return Object.assign({}, state, {error: action.error})

    default: 
      return state
  }
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
