import {
  FETCHING_SMURFS,
  FETCHED_SMURFS,
  ADDING_SMURF,
  UPDATING_SMURF,
  DELETING_SMURF,
  ERROR,
  ADDED_SMURF
} from '../actions'

const initialState =
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true }

    case FETCHED_SMURFS:
      return { ...state, smurfs: [...action.payload], fetchingSmurfs: false }
    
    case ADDING_SMURF:
      return { ...state, addingSmurf: true }

    case ADDED_SMURF:
      return { ...state, smurfs: [...action.payload], addingSmurf: false }

    case UPDATING_SMURF:
      return { ...state }

    case DELETING_SMURF:
      return { ...state }

    case ERROR:
      return { ...state, error: action.error }

    default:
      return state

  }
}