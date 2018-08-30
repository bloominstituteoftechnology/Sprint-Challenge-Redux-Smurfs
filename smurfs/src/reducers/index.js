/*
  Be sure to import in all of the action types from `../actions`
*/
import { ADD_SMURF, DELETE_SMURF, LOADING_DATA, LOADED_DATA, FAILED_LOADING_DATA } from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
   counter: 0
 }

export default (smurfy = initialState, action) => {
  switch(action.type) {
    case ADD_SMURF:
      const newState1 = Object.assign({}, smurfy, {smurfs:[...smurfy.smurfs, {name: action.name, age: action.age, height: action.height, id: smurfy.counter}]});
      newState1.counter++;
      return newState1;
      case DELETE_SMURF:
      return Object.assign({}, smurfy, {smurfs:[...smurfy.smurfs].splice(action.smurfid,1)}); 
    case LOADING_DATA:
      const newState2 = Object.assign({}, smurfy, {fetchingSmurfs: true});
      return newState2;
    case LOADED_DATA:
      const newState3 = Object.assign({}, smurfy, {smurfs: action.payload.data}, {fetchingSmurfs: false});
      return newState3;
    case FAILED_LOADING_DATA:
      return Object.assign({}, smurfy, {error: action.err}, {fetchingSmurfs: false});
    default:
      return smurfy;
  }
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/