import {
  GET_SMURFS,
  GET_SMURFS_FAILURE,
  GET_SMURFS_SUCCESS,
  ADD_SMURF,
  ADD_SMURF_FAILURE,
  ADD_SMURF_SUCCESS,
  UPDATE_SMURF,
  UPDATE_SMURF_FAILURE,
  UPDATE_SMURF_SUCCESS,
  DELETE_SMURF,
  DELETE_SMURF_FAILURE,
  DELETE_SMURF_SUCCESS,
} from '../actions'


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURFS : return {...state, fetchingSmurfs: true}
    case GET_SMURFS_FAILURE : return {...state, fetchingSmurfs: false, error: action.payload}
    case GET_SMURFS_SUCCESS : 
      return {
        ...state, 
        fetchingSmurfs: false,
        smurfs: action.payload
      }

    case ADD_SMURF : return {...state, addingSmurf: true}
    case ADD_SMURF_FAILURE : return {...state, addingSmurf: false, error: action.payload}
    case ADD_SMURF_SUCCESS : 
      return {
        ...state, 
        addingSmurf: false,
        smurfs: action.payload
      }

    case UPDATE_SMURF : return {...state, updatingSmurf: true}
    case UPDATE_SMURF_FAILURE : return {...state, updatingSmurf: false, error: action.payload}
    case UPDATE_SMURF_SUCCESS : 
      return {
        ...state, 
        updatingSmurf: false,
        smurfs: action.payload
      }

    case DELETE_SMURF : return {...state, deletingSmurf: true}
    case DELETE_SMURF_FAILURE : return {...state, deletingSmurf: false, error: action.payload}
    case DELETE_SMURF_SUCCESS : 
      return {
        ...state, 
        deletingSmurf: false,
        smurfs: action.payload
      }

    default: return {...state};
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
