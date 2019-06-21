import * as types from '../actions/types';

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
        smurfs: [...state.smurfs, action.payload]
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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
