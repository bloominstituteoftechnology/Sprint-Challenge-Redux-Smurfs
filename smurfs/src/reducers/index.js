/*
  Be sure to import in all of the action types from `../actions`
*/
import { ADD_SMURF, DELETE_SMURF } from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


export default (smurfy = initialState, action) => {
  switch(action.type) {
    case ADD_SMURF:
      return Object.assign({}, smurfy, {smurfs:[...smurfy.smurfs, {name: action.name, age: action.age, height: action.height, id: smurfy.smurfs.length}]});
      break;
    case DELETE_SMURF:
      return Object.assign({}, smurfy, {smurfs:[...smurfy.smurfs].splice(action.smurfid)});
      break;
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