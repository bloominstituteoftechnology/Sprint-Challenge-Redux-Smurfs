import {
  ADDING_SMURF,
  ADDING_SMURF_SUCCESS,
  ADDING_SMURF_FAILURE,
  
  GETTING_SMURFS,
  GETTING_SMURFS_SUCCESS,
  GETTING_SMURFS_FAILURE,
} from '../actions'


 
 const initialState= {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state= initialState, action) => {
  console.log(state);
  switch(action.type){
    case GETTING_SMURFS:
        return { ...state, fetchingSmurfs: true }
    case GETTING_SMURFS_SUCCESS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false }
    case GETTING_SMURFS_FAILURE:
      const GETTING_SMURFS_ERROR = `API Retrieval Error: ${action.payload}`
      return { ...state, error: GETTING_SMURFS_ERROR }



    default:
      return state;
  }
}