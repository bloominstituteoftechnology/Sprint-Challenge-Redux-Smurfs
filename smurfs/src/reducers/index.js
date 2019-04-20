import {
  FETCH_SMURFS,
  SUCCESS,
  FAILURE,
  POST_SMURF,
  DELETE_SMURF,
  PUT_SMURF,
} from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/
  const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    error: null,
    editing: false,
  }

  export const Reducer = (state = initialState, action) => {
    switch (action.type){
      case FETCH_SMURFS:
        return {
          ...state,
          fetchingSmurfs: true,
        }

      case SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...action.payload]
      }

      case FAILURE:
        return {
          ...state,
          fetchingSmurfs: false,
          error: action.payload,
        }
        
      default:
      return state;
    }
  }

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
