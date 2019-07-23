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

import { GET_SMURFS, GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAILED, ADD_SMURFS_START, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAILED, } from '../actions'


const initialState = {
   smurfs: [],
   fetchingSmurfs: [],
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START: {
      return {
            ...state,
            fetchingSmurfs: true,
      }
    }
    case  GET_SMURFS_SUCCESS: {
     
      return {
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload
      }
    }
    case GET_SMURFS_FAILED: {
      return {
        ...state,
        fetchingSmurfs: false,
        // error: action.payload.sendUserError
      }
    }

    case ADD_SMURFS_START: {
      return {
            ...state,
            fetchingSmurfs: true,
      }
    }
    case  ADD_SMURFS_SUCCESS: {
      const { smurfs } = action.payload
      return {
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs
      }
    }
    case ADD_SMURFS_FAILED: {
      return {
        ...state,
        fetchingSmurfs: false,
        // error: action.payload.sendUserError
      }
    }
    default:
    return state
  }
}

export default smurfsReducer