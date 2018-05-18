import {ADD_SMURF, GET_SMURF, UPDATE_SMURF, DELETE_SMURF} from '../actions/index';



const initialState = 
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };


 export const smurfReducer = (state = initialState, action) =>{
   switch(action.type){
      case ADD_SMURF:
        return Object.assign({}, state, state.concat(action.payload));
      case GET_SMURF:
        return Object.assign({}, state);
      case UPDATE_SMURF:
        return Object.assign({}, state, state.concat.action.payload)
      case DELETE_SMURF:
        return Object.assign({}, state.slice(0, action.payload).concat(state.slice(action.payload)));
     default:
      return state;
   }
  }
 

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
