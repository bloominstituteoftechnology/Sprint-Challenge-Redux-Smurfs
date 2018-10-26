import { 
  FETCHING_SMURFS,
  SMURF_FETCH_SUCCESS,
  SMURF_FETCH_FAILURE,
  ADD_SMURF,
  EDIT_SMURF,
   } from '../actions';


 const initialState = 
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
 };

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };

    case SMURF_FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [ ...action.payload ]
      };

    case SMURF_FETCH_FAILURE:
      return { ...state, fetchingSmurfs: false, error: action.payload };
    
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [ ...state.smurfs, { id: action.id, name: action.name, age: action.age, height: action.height }]
      };

    default:
      return state;
  };
};
