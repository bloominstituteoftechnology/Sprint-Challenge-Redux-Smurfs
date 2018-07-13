import { FETCHING_SMURFS, UPDATING_SMURFS, DELETING_SMURFS, SUCCESS, ERROR } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  updatingSmurfs: false,
  deletingSmurfs: false,
  smurfsReady: false,
  error: null,
}

export const smurfReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign(
        {},
        state,
        { fetchingSmurfs: true }
      )
    case UPDATING_SMURFS:
      return Object.assign(
        {},
        state,
        { updatingSmurfs: true }
      )
    case DELETING_SMURFS:
      return Object.assign(
        {},
        state,
        { deletingSmurfs: true}
      )
    case SUCCESS:
      return Object.assign(
        {},
        state,
        {
          smurfs: [...action.payload],
          fetchingSmurfs: false,
          updatingSmurfs: false,
          deletingSmurfs: false,
          smurfsReady: true,
          error: null,
        }
      )
    case ERROR: 
      return Object.assign(
        {},
        state,
        {
          fetchingSmurfs: false,
          updatingSmurfs: false,
          deletingSmurfs: false,
          smurfsReady: false,
          error: 'Error!',
        }
      )
    default:
      return state;
  }
}

/*
  Be sure to import in all of the action types from `../actions`
*/

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
