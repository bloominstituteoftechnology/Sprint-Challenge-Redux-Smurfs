/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH, FETCHED, ERROR_FETCHING, ADD, ERROR_ADDING, DELETE, ERROR_DELETING } from '../actions';


//  Your initial/default state for this project could *Although does not have to* look a lot like this
 
   const initialState ={
  smurfs: [],
    fetchingSmurfs: false,
   addingSmurf: false,
   deletingSmurf: false,
   error: null,
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const rootReducer = (state = initialState, action) => {
   switch (action.type) {
    case FETCH_SMURFS:
     return Object.assign({}, state, { fetchingSmurfs: true });

    case FETCHED:
      return Object.assign({}, state, {
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false,
        error: null
      });

    case ERROR_FETCHING:
      return Object.assign({}, state, {
        error: action.payload,
      });

    case ADD:
       return Object.assign({}, state, {
        
        smurfs: [...action.payload],
        addingSmurf: true,
        error: null
      });

     
    case ERROR_ADDING:
      return Object.assign({}, state, {
        error: action.payload,
      });


     
    case DELETE:
      return Object.assign({}, state, {
        smurfs: [...state],
        deletingSmurfs: true
      });

     
    case ERROR_DELETING:
      return Object.assign({}, state, {
        error: action.payload,
      });

    default:
      return state;
  }
};

export default rootReducer;