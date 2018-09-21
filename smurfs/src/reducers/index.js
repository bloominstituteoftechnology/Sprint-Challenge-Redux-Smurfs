import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  SMURFS_SAVED,
  SAVING_SMURFS,
  UPDATING_SMURF,
  SMURF_UPDATED,
  DELETING_SMURF,
  SMURF_DELETED,
  SMURFS,
  ERROR
} from '../actions'

const initState = {
  fetchingSmurfs: false,
  smurfsFetched: false,
  smurfsSaved: false,
  savingSmurfs: false,
  updatingSmurf: false,
  smurfUpdated: false,
  deletingSmurf: false,
  smurfDeleted: false,
  smurfs: [],
  error: null
}

export const smurfsReducer = (state = initState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case SMURFS_FETCHED:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: state.smurfs.concat(action.payload),
        smurfsFetched: true
      }
    case SMURFS_SAVED:
      return {
        ...state,
        savingSmurfs: false,
        smurfs: state.smurfs.concat(action.payload)
      }
    case SAVING_SMURFS:
      return {
        ...state,
        savingSmurfs: true,
      }
    case UPDATING_SMURF:
      return {
        ...state

      }
    case SMURF_UPDATED:
      return {
        ...state

      }
    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true

      }
    case SMURF_DELETED:
      return {
        ...state,
        deletingSmurf: false,

      }
    case SMURFS:
      return {
        ...state

      }
    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
     }
     default: return state;
  }
}
