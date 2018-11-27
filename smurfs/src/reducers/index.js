/*
  Be sure to import in all of the action types from `../actions`
*/
import{LOAD_SMURFS,LOADING_SMURFS,ADDING_SMURF,ADD_SMURF,ERROR,DELETING,DELETED} from '../actions';


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/
const initialState = {
  smurfs: [],
  loadingSmurfs: false,
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
export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING_SMURFS:
    return {...state, loadingSmurfs: true};
    case LOAD_SMURFS:
    return {...state, smurfs: action.payload, loadingSmurfs: false};
    case ADDING_SMURF:
    return {...state, addingSmurf: true};
    case ADD_SMURF:
    return {...state, smurfs: action.payload, addingSmurf: false};
    case ERROR:
    return {...state, loadingSmurfs: false, addingSmurf: false, error: action.payload};
    case DELETING:
    return Object.assign({},state,{deletingSmurf:true})
    case DELETED:
    return Object.assign({},state,{deletingSmurf:false,smurfs:action.payload})
    default:
    return state;
  }
};