/*
  Be sure to import in all of the action types from `../actions`
*/
import{ GET_SMURFS, GET_SUCCESS, GET_FAILURE, ADD_SMURF, ADD_SUCCESS, ADD_FAILURE } from '../actions';


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */
 const initialState = {
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   smurfs: [],
   errors: []
 }

 export default (state = initialState, action) => {
   switch(action.type) {
     case GET_SMURFS:
        return Object.assign({}, state, {
          fetchingSmurfs:true
        });
      case GET_SUCCESS:
        return Object.assign({}, state, {
          fetchingSmurfs:false,
          smurfs: action.payload
        });
      case GET_FAILURE:
        return Object.assign({}, state, {
          fetchingSmurfs:false,
          errors: [...state.errors, action.error]
        });
      case ADD_SMURF:
        return Object.assign({}, state, {
          addingSmurf: true
        });
      case ADD_SUCCESS:
        return Object.assign({}, state, {
          addingSmurf:false,
          smurfs: [...state.smurfs, action.payload]
        });
      case ADD_FAILURE:
        return Object.assign({}, state, {
          addingSmurf: false,
          errors: [...state.errors, action.error]
        });
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
