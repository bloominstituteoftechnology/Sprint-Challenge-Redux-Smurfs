import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL
} from '../actions';

//  Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


const reducer = (state = initialState, action) => {
  switch(action.type){
                  //fetching smurfs 
    case FETCH_SMURFS_START: 
      return{
        ...state,
        fetchingSmurfs: true
      }
    case FETCH_SMURFS_SUCCESS: 
      return{
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload.data
    }

    case FETCH_SMURFS_SUCCESS: 
      console.error(action.payload);
      return{
        ...state,
        fetchingSmurfs: false
    }


    


    default: 
      return state
  }
}

 export default reducer;




/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
