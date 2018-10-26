/*
  Be sure to import in all of the action types from `../actions`
*/
import{GET_SMURFS,GETTING_SMURFS,ADDING_SMURF,ADD_SMURF,ERROR,DELETING,DELETED} from '../actions';

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
	smurfs:[],
	gettingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
  deletingSmurf: false,
  error: null
 
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
    case GETTING_SMURFS:
    return {...state, gettingSmurfs: true};
    case GET_SMURFS:
    return{...state, smurfs: action.payload, gettingSmurfs: false};
    case ADDING_SMURF:
    return {...state,addingSmurf: true};
    case ADD_SMURF:
    return {...state, smurfs: action.payload, addingSmurf: false};
    case ERROR:
    return{...state, gettingSmurfs: false, addingSmurf: false, error: action.payload};
    case DELETING:
    return Object.assign({},state,{deletingSmurf:true})
    case DELETED:
    return Object.assign({},state,{deletingSmurf:false,smurfs:action.payload})
    default:
    return state;
  }
};