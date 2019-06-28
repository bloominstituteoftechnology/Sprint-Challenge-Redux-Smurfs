import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL } from '../actions/'


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: null,
  addingSmurf: false
}

export default (state = initialState, action) => {
  console.log('inside reducer')
  switch(action.type) {
    case FETCH_START:
      return {
        ...state, fetchingSmurfs: true
      };
      case FETCH_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          fetchingSmurfs: false
        }
        case FETCH_FAIL: 
          return {
            ...state, 
            fetchingSmurfs: false,
            err: action.payload
          }
        
        case ADD_SMURF_START:
          return {
            ...state, addingSmurf: true
          }
    default:
      return state;
  }
}

// export default smurfReducer
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
