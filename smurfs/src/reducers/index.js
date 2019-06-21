/*
  Be sure to import in all of the action types from `../actions`
*/
import {GET_START,
    GET_SUCCESS,
    GET_ERROR,
    POST_START,
    POST_SUCCESS,
    POST_ERROR,
    UPDATE_START,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
    DELETE_START,
    DELETE_SUCCESS,
    DELETE_ERROR,
} from "../actions"
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

const initialState = {
    smurfs: [],
    isGetting: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    errorMessage: null
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state=initialState, {type, payload}) => {
    switch(type){
    case GET_START:
        return {
            ...state,
            isGetting: true,
            errorMessage: null
        }
    case GET_SUCCESS:
        return {
            ...state,
            isGetting: false,
            smurfs: payload
        }
    case GET_ERROR:
        return {
            ...state,
            errorMessage: payload
        }
    case POST_START:
        return {
            ...state,
            isPosting: true,
            errorMessage: null
        }
    case POST_SUCCESS:
        return {
            ...state,
            isPosting: false,
            smurfs: payload
        }
    case POST_ERROR:
        return {
            ...state,
            errorMessage: payload
        }
    case UPDATE_START:
        return {
            ...state,
            isUpdating: true,
            errorMessage: null
        }
    case UPDATE_SUCCESS:
        return {
            ...state,
            isUpdating: false,
            smurfs: payload
        }
    case UPDATE_ERROR:
        return {
            ...state,
            errorMessage: payload
        }
    case DELETE_START:
        return {
            ...state,
            isDeleting: true,
            errorMessage: null
        }
    case DELETE_SUCCESS:
        return {
            ...state,
            isDeleting: false,
            smurfs: payload
        }
    case DELETE_ERROR:
        return {
            ...state,
            errorMessage: payload
        }
    default: 
        return state
    }
}