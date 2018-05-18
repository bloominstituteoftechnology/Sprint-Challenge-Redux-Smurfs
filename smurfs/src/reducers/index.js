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
        addingSmurf: true,
      }
    case UPDATING_SMURF:
      const index = state.smurfs.findIndex(smurf => smurf.id === action.smurf.id)
      console.log(action)
      return {
        ...state,
        updatingSmurf: true,
        smurfs: [
          ...state.smurfs.slice(0,index),
          state.smurfs[index] = {
            ...state.smurfs[index],
            isUpdating: true,
          },
          ...state.smurfs.slice(index+1),
        ]
      }
    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true
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
