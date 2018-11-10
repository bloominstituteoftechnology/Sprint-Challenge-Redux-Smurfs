import {
  GET_SMURF_LOADING,
  GET_SMURF_SUCCESS ,
  GET_SMURF_FAILURE,
  ADD_SMURF_LOADING ,
  ADD_SMURF_SUCCESS ,
  ADD_SMURF_FAILURE ,
  DELETE_SMURF_LOADING,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE ,

} from '../actions/index';

const initialState = {
  smurfs : [],
  fetchingSmurfs: false,
  addingSmurf: false,
  //updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

const smurfReducer = (state = initialState, action) =>{
  switch(action.type){
    case GET_SMURF_LOADING:
      return Object.assign({}, state, {
        ...state,
        fetchingSmurfs:true,
      })
    case GET_SMURF_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        fetchingSmurfs:false,
        smurfs: action.payload,
      }) 
    case GET_SMURF_FAILURE:
      return Object.assign({},state, {
        ...state,
        error:action.payload,
      }) 
      case ADD_SMURF_LOADING:
      return Object.assign({}, state, {
        ...state,
        addingSmurf:true,
      })
    case ADD_SMURF_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        addingSmurf:false,
        smurfs: action.payload,
      }) 
    case ADD_SMURF_FAILURE:
      return Object.assign({},state, {
        ...state,
        error:action.payload,
      })  
      case DELETE_SMURF_LOADING:
      return Object.assign({}, state, {
        ...state,
        deletingSmurf:true,
      })
    case DELETE_SMURF_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        deletingSmurf:false,
        smurfs: action.payload,
      }) 
    case DELETE_SMURF_FAILURE:
      return Object.assign({},state, {
        ...state,
        error:action.payload,
      })  
    default :
      return state    
  }
}

export default smurfReducer;
