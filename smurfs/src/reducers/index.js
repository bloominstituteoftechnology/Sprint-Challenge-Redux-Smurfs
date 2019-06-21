import {
  FETCHING_SMURFS,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  SMURF_FAILURE
  
} from '../actions';

const initialState = {
  smurfs: [],
   fetching: false,
   error: ''
}

export const rootReducer = ( state = initialState, action) => {
  console.log('reducer', action)
  switch(action.type) {
    case FETCHING_SMURFS:
    return{
      ...state,
      fetching:true,
      error:''

    }
    case FETCH_SMURFS_SUCCESS:
    return{
      ...state,
      smurfs: action.payload,
      fetching: false,
      error: ''
    }
    case FETCH_SMURFS_FAILURE:
    return{
      ...state,
      fetching: false,
      error: action.payload

    }
    case ADD_SMURF:
    return{
      ...state,
      fetching: true,
      error: ''
    }
    case ADD_SMURF_SUCCESS:
    return{
      ...state,
      smurfs:action.payload,
      fetching: false,
      error:''
    }
    case SMURF_FAILURE:
    return{
      ...state,
      fetching:false,
      error:action.payload
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
