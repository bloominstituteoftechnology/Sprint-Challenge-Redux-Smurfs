import * as actions from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  addingSmurfs: false,
  addedSmurfs: false,
  error: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true};
    case actions.FETCHED_SMURFS:
      return {
        ...state,
        fetchingSmurfs:false,
        fetchedSmurfs:true,
        smurfs: action.payload
      };
    case actions.ADDING_SMURFS:
      return {...state, addingSmurfs:true};
    case actions.ADDED_SMURFS:
      return {
        ...state,
        addingSmurfs: false,
        addedSmurfs: true,
        smurfs: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
