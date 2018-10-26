

import { FETCHING_SMURFS, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, ADDING_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE, DELETING_SMURF, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAILURE } from '../actions';

const initialState = {
  smurfs: [],
  fetching: false,
  adding: false,
  error: null,  
  deleting: false
};
const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetching: true };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,        
        smurfs: [...state.smurfs, ...action.payload],
        fetching: false
      };
    case FETCHING_SMURFS_FAILURE:
      return { ...state, fetching: false, error: action.payload };
    
    case ADDING_SMURF:
      return {...state, adding: true};
    case ADD_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload, adding: false };
    case ADD_SMURF_FAILURE:
      return { 
        ...state, 
        adding: false, 
        error: action.payload 
      }
    case DELETING_SMURF:
      return {...state, deleting: true};
    case DELETE_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload, adding: false };
    case DELETE_SMURF_FAILURE:
      return {
        ...state, 
        deleting: false, 
        error: action.payload 
      };
    default:
      return state; 
  }
};

export default smurfsReducer;