
import { FETCHING, FETCHED, ERROR, ADDING, ADDED } from '../actions'


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  addedSmurf: false,
  error: null
}

export const smurfsReducer = (state = initialState, action) => {
 switch (action.type) {
   // Fill me in with the important reducers
   // action types should be FETCHING, FETCHED, and ERROR
   // your switch statement should handle all of these cases.
   case FETCHING:
   return Object.assign({}, state, { fetching: true });

   case FETCHED:
   return Object.assign({}, state, {
     smurfs: [...state.smurfs, ...action.payload], 
     fetching: false 
   });

   case ERROR:
   return Object.assign({}, state, {
     fetching: false, 
     error: "Error fetching Smurfs" 
   });

   case ADDING:
      return Object.assign({}, state, {
        addingSmurf: true,
      });
      

    case ADDED:
    window.location.reload();
      return Object.assign({}, state, {
        friends: action.payload,
        addingSmurf: false,
        addedSmurf: true
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