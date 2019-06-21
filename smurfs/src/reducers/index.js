import * as types from '../actions/types';
import { combineReducers } from "redux";

const initialState =  {
   smurfs: [],
   isFetching: false,
   isAdding: false,
  //  updatingSmurf: false,
  //  deletingSmurf: false,
   error: false,
 };

 export const fetchSmurfsRequest = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_SMURFS:
      return {...state, isFetching:true};
    case types.FETCH_SUCCESS:
      return {
        smurfs: [...state.smurfs, action.payload],
      };
    case types.FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case types.ADD_SMURF:
      return state;
    default:
    return state;
  }
 };

 export default combineReducers({
   fetchSmurfsRequest
 });