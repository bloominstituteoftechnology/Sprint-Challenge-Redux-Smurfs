import {
  FETCHING_SMURFS, 
  FETCH_SMURFS_SUCCESS, 
  FETCH_SMURFS_FAILURE, 
  ADDING_SMURF,
  ADD_SMURF_FAILURE,
  ADD_SMURF_SUCCESS
} from '../actions';


const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }



 export const smurfReducer = (state = initialState, action ) => {
   switch(action.type) {
     case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurf: true
      }
     case FETCH_SMURFS_SUCCESS:
      return {
        ...state, 
        error: null,
        fetchingSmurf: false,
        smurfs: action.payload
      }
      case FETCH_SMURFS_FAILURE:
        return {
          ...state,
          fetchingSmurf: false,
          error: action.payload
        }
      case ADDING_SMURF: 
        return {
          ...state,
          addingSmurf: true,
        }
      case ADD_SMURF_SUCCESS: 
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
      case ADD_SMURF_FAILURE: 
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
     default:
       return state
    }
    
 }

 