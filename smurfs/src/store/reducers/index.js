import {
  SMURFS_FETCH_START,
  SMURFS_FETCH_SUCCESS,
  SMURFS_FETCH_FAIL,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  ADD_SMURF_START
} from '../actions';


const initialState = {
  smurfs: [],
  addingSmurf: false,
  error: '',
  isLoading: false
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SMURFS_FETCH_START:
      return {...state, isLoading: true};
    case SMURFS_FETCH_SUCCESS: 
      return {...state, isLoading: false, smurfs: action.payload};
    case SMURFS_FETCH_FAIL:
      console.log(action.payload);
      return {...state, isLoading: false, error: action.payload};
    case ADD_SMURF_START:
      return { ...state, addingSmurf: true };
    case ADD_SMURF_SUCCESS:
      return { ...state, addingSmurf: false, smurfs: action.payload};
    case ADD_SMURF_FAIL:
      console.log(action.payload);
      return { ...state, addingSmurf: false, error: action.payload};
    default: 
      return state;
  }
}