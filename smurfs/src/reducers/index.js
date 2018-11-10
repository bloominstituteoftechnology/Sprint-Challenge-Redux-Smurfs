/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  CREATING,
  CREATING_SUCCESS,
  CREATING_FAILURE,
  DELETING,
  DELETING_SUCCESS,
  DELETING_FAILURE,
  UPDATING,
  UPDATING_SUCCESS,
  UPDATING_FAILURE} from "../actions"
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
  const initialState={
    smurfs:[],
    fetching:false,
    creating: false,
    deleting: false,
    updating: false,
    error: null
  }
  /*
    You'll only need one smurf reducer for this project.
    Feel free to export it as a default and import as rootReducer. 
    This will guard your namespacing issues.
    There is no need for 'combineReducers' in this project.
    Components can then read your store as, `state` and not `state.fooReducer`.
  */
  const smurfReducer = (state=initialState, action) => {
    switch(action.type) {
      case FETCHING:
      return {...state, fetching:true};
      case FETCHING_SUCCESS:
      return {...state, fetching:false, smurfs:[...state.smurfs, ...action.payload]};
      case FETCHING_FAILURE:
      return {...state, fetching:false, error:action.payload};
  
      case CREATING:
      return {...state, creating:true};
      case CREATING_SUCCESS:
      return {...state, creating:false, smurfs:[...action.payload]};
      case CREATING_FAILURE:
      return {...state, creating:false, error:action.payload};
  
      case DELETING:
      return {...state, deleting:true};
      case DELETING_SUCCESS:
      return {...state, deleting:false, smurfs:[...action.payload]};
      case DELETING_FAILURE:
      return {...state, deleting:false, error:action.payload};
  
      case UPDATING:
      return {...state, updating:true};
      case UPDATING_SUCCESS:
      return {...state, updating:false, smurfs:[...action.payload]};
      case UPDATING_FAILURE:
      return {...state, updating:false, error:action.payload};
  
      default:
      return state;
    }
  }
  
  export default smurfReducer;
