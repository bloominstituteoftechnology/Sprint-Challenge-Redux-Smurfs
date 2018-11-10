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
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

export const smurfReducer = (state = initialState, action) =>{
  switch(action.type){
    case SMURF_LOADING:
      return Object.assign({}, state, {
        ...state,
        fetchingSmurfs:true,
      })
  }
}
