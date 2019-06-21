import {
  FETCHING_SMURFS,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF,
  GET_SMURF,
  SMURF_FAILURE
} from '../actions';

const initialState = {
  smurfs: [],
   fetching: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}

export const rootReducer = ( state = initialState, action) => {
  console.log('reducer', action)
  switch(action.type) {
    case FETCHING_SMURFS:
    return{
      ...state,
      fetching:true,
      err:''

    }
    case FETCH_SMURFS_SUCCESS:
    return{
      ...state,
      smurfs: action.payload,
      fetching: false,
      err: ''
    }
    case FETCH_SMURFS_FAILURE:
    return{
      ...state,
      fetching: false,
      err: action.payload

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
