import { FETCHING_SMURFS, FETCHED_SMURFS, ADDING_SMURF, ADDED_SMURF, DELETED_SMURF, DELETING_SMURF, UPDATING_SMURF, UPDATED_SMURF } from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  id: 1,
  error: null
}

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: !state.fetchingSmurfs
      }
    case FETCHED_SMURFS:
      console.log(state)
      return {
        ...state,
        fetchingSmurfs: !state.fetchingSmurfs,
        smurfs: action.payload.data,
        id: action.payload.data.length,
      }
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: !state.addingSmurf,
      }
    case ADDED_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: !state.addingSmurf,
      }
    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: !state.deletingSmurf
      }
    case DELETED_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: !state.deletingSmurf
      }
    case UPDATING_SMURF:
      return {
        ...state,
        updatingSmurf: !state.deletingSmurf
      }
    case UPDATED_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        updatingSmurf: !state.updatingSmurf
      }
    default:
      return {
        ...state,
        id: state.smurfs.length
      }
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/