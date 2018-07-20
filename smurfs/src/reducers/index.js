import 
{ FETCHING_SMURFS, 
  FETCHED_SMURFS, 
  FETCHING_SMURFS_ERROR } 
  from '../actions/index';


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };

 export const smurfReducer = (state = initialState, actiion ) => {
   switch (action.type) {
     case FETCHING_SMURFS:
     return Object.assign({}, state, { fetchingSmurfs: true });
     case FETCHED_SMURFS:
     return Object.assign({}, state, {
       smurfsFetched: true,
       fetchingSmurfs: false,
       error: null,
       smurfs: [...action.payload]
     });
     case FETCHING_SMURFS_ERROR:
     return Object.assign({}, state, {
       fetchingSmurfs: false,
       error: action.payload
     });
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
