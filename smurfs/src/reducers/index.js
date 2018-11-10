/*
  Be sure to import in all of the action types from `../actions`
*/
import { LOADING, COMPLETE, ERROR, ADDING, UPDATING, DELETING } from '../actions';


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  smurfsLoaded: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
      })
    case COMPLETE:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfs: action.payload,
        smurfsLoaded: true,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
      })
    default:
      return state
  }
}
