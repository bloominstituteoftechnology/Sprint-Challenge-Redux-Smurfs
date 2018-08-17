/*
  Be sure to import in all of the action types from `../actions`
*/
import{ GET_SMURFS, GET_SUCCESS, GET_FAILURE,
   ADD_SMURF, ADD_SUCCESS, ADD_FAILURE,
    DEL_SMURF, DEL_SUCCESS, DEL_FAILURE,
    EDIT_SMURF, EDIT_SUCCESS, EDIT_FAILURE } from '../actions';


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
//GET CASES
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
  //ADD CASES
      case ADD_SMURF:
        return Object.assign({}, state, {
          addingSmurf: true
        });
      case ADD_SUCCESS:
        return Object.assign({}, state, {
          addingSmurf:false,
          smurfs: action.payload
        });
      case ADD_FAILURE:
        return Object.assign({}, state, {
          addingSmurf: false,
          errors: [...state.errors, action.error]
        });
  //DEL CASES
      case DEL_SMURF:
        return Object.assign({}, state, {
          deletingSmurf: true
        });
      case DEL_SUCCESS:
        return Object.assign({}, state, {
          deletingSmurf: false,
          smurfs: action.payload
        });
      case DEL_FAILURE:
        return Object.assign({}, state, {
          deletingSmurf: false,
          errors: [...state.errors, action.error]
        });
  //EDIT CASES
      case EDIT_SMURF:
        return Object.assign({}, state, {
          updatingSmurf: true
        });
      case EDIT_SUCCESS:
        return Object.assign({}, state, {
          updatingSmurf: false,
          smurfs: action.payload
        })
      case EDIT_FAILURE:
        return Object.assign({}, state, {
          updatingSmurf: false,
          errors: [...state.errors, action.error]
        })
      //DEFAULT
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
