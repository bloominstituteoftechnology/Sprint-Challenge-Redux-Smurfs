/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  CRUD_ERROR, 
  POSTING_SMURF, 
  POSTED_SMURF, 
  GETTING_SMURFS, 
  GOT_SMURFS, 
  PUTTING_SMURF, 
  PUT_SMURF, 
  DELETING_SMURF, 
  DELETED_SMURF 
} from '../actions/';

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
const initialState =  {
  smurfs: [],
  crudStates: {
    postingSmurf: false, 
    postedSmurf: false, 
    gettingSmurfs: false, 
    gotSmurfs: false, 
    puttingSmurf: false, 
    putSmurf: false, 
    deletingSmurf: false, 
    deletedSmurf: false, 
    error: ''
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch(action.type) {
      case CRUD_ERROR:
        console.error('Error:', action.payload);
        return {...state, crudStates: {...state.crudStates, postingSmurf: false, gettingSmurfs: false, puttingSmurf: false, deletingSmurf: false, error: action.payload}};
      case POSTING_SMURF: 
        return {...state, crudStates: {...state.crudStates, postedSmurf: false, postingSmurf: true}};
      case POSTED_SMURF: 
        return {...state, crudStates: {...state.crudStates, postedSmurf: true, postingSmurf: false}, smurfs: action.payload};
      case GETTING_SMURFS: 
        return {...state, crudStates: {...state.crudStates, gotSmurfs: false, gettingSmurfs: true}};
      case GOT_SMURFS: 
        return {...state, crudStates: {...state.crudStates, gotSmurfs: true, gettingSmurfs: false}, smurfs: action.payload};
      case PUTTING_SMURF:
        return {...state, crudStates: {...state.crudStates, putSmurf: false, puttingSmurf: true}};
      case PUT_SMURF:
        return {...state, crudStates: {...state.crudStates, putSmurf: true, puttingSmurf: false}, smurfs: action.payload};
      case DELETING_SMURF:
        return {...state, crudStates: {...state.crudStates, deletedSmurf: false, deletingSmurf: true}};
      case DELETED_SMURF:
        return {...state, crudStates: {...state.crudStates, deletedSmurf: true, deletingSmurf: false}, smurfs: action.payload};
      default:
        return state;
  }
};
