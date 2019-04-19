/*
  Be sure to import in all of the action types from `../actions`
*/
import{
  FETCHING_SMURFS,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  ADD_SMURFS,
} from "../actions"

 
	  const initialstate ={
	   smurfs: [],
     fetchingSmurfs: false,
	   addingSmurf: false,
	   updatingSmurf: false,
	   deletingSmurf: false,
	   error:'',
	 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const rootReducer =( state = initialstate, action) =>{
  switch(action.type){
    case FETCHING_SMURFS:
    return{
      ...state,
      err: '',
      fetchingSmurfs:true,
 
    }
    case FETCHING_SUCCESS:
    return{
      ... state,
      err:'',
      smurfs: action.payload
    }
    case ADD_SMURFS:
    return{
     smurfs: action.payload
    }
 
 
 
 
 
    case FETCHING_FAILURE:
    default:
    return state;
  }
}
export default rootReducer;