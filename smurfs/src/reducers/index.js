import {
  FETCHING_SMURFS,
  ADDING_SMURF,
  UPDATING_SMURF,
  DELETING_SMURF,
  FETCHED_SMURFS,
  ERROR
} from '../actions'

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

export const smurfReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCHED_SMURFS: 
      return {
        smurfs: action.smurfs,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      }
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurfs: true,
      }
    case UPDATING_SMURF:
      return {
        ...state,
        updatingSmurfs: true
      }
    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurfs: true
      }
    case ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}
