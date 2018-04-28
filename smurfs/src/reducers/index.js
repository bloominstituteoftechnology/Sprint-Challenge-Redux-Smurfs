/*
  Be sure to import in all of the action types from `../actions`
*/

import { LOADING, SUCCESS, ERROR } from '../actions';

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

// adding fetching functionality first

const defaultState = {
  smurfs: [],
  smurf: {},
  fetching: false,
  error: "",
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export default (state = defaultState, action) => {
  switch(action.type) {
    case LOADING:
      return Object.assign({}, state, { LOADING: true })

    case SUCCESS:
      return Object.assign({}, state, { smurfs: action.smurfs, LOADING: false })

    case ERROR:
      return Object.assign({}, state, { error: action.error , LOADING: false })

    default:
      return state;
  }
}
