/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING, FETCHED, ADDING, UPDATING, DELETING, ERROR} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const charsReducer = (state = initialState, action) =>{
  switch(action.type){
    case FETCHING:
      return{...state, fetchingSmurfs:true}
    case FETCHED:
      return{
        ...state,
        smurfs: action.payload,
        fetchingSmurfs:false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
      }
    case ADDING:
      return{...state, addingSmurf:true}
    case UPDATING:
      return{...state, updatingSmurf: true}
    case DELETING:
      return{...state, updatingSmurf: false}
    case ERROR:
      return{
        ...state, 
        fetchingSmurfs: false, 
        addingSmurf: false, 
        updatingSmurf: false, 
        deletingSmurf: false
      }
    default:
      return state;
  }
};

export default charsReducer;