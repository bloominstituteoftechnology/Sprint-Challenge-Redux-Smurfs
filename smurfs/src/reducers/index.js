import { FETCHING_SMURFS, ADDING_SMURF, UPDATING_SMURFS, DELETING_SMURF, SUCCESS, ERROR } from '../actions';


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  smurfsReady: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign(
        {},
        state,
        { fetchingSmurfs: true }
      )
    case ADDING_SMURF:
      return Object.assign(
        {},
        state,
        { addingSmurf: true }
      )
    case UPDATING_SMURFS:
      return Object.assign(
        {},
        state,
        { updatingSmurf: true }
      )
    case DELETING_SMURF:
      return Object.assign(
        {},
        state,
        { deletingSmurf: true }
      )
    case SUCCESS:
      return Object.assign(
        {},
        state,
        {
          smurfs: [...action.payload],
          fetchingSmurfs: false,
          addingSmurf: false,
          updatingSmurf: false,
          deletingSmurfs: false,
          smurfsReady: true,
          error: null
        }
      )
    case ERROR:
      console.error(action.payload)
      return Object.assign(
        {},
        state,
        {
          fetchingSmurfs: false,
          updatingSmurf: false,
          deletingSmurfs: false,
          smurfsReady: false,
          error: 'Error, Smurf running away...',
        }
      )
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
