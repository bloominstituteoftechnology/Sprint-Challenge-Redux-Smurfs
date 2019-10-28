/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED,
  FETCH_DATA,
  SUCCESS,
  FAILURE
} from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this*/
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SMURF: {
      return {
        ...state,
        fetchingSmurfs: true
      }
    }

    case ADD_SMURF_SUCCESS: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: null
      }
    }

    case ADD_SMURF_FAILED: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    }

    case FETCH_DATA: {
      return {
        ...state,
        fetchingSmurfs: true,
        error: action.payload
      }
    }

    case SUCCESS: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs: [...state.smurfs, ...action.payload]
      }
    }

    case FAILURE: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    }

    default:
      return state
  }
}