/*Be sure to import in all of the action types from `../actions`*/
import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { GET_SMURFS, GETTING_SMURFS, CREATE_SMURF, CREATING_SMURF, ERROR } from '../actions';

/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  gettingSmurf: false,
  creatingSmurf: false,
  error: null,
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
const SmurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS: 
      return {...state, smurfs: action.payload, gettingSmurfs: false };
    case GETTING_SMURFS: 
      return {...state, gettingSmurfs: true }
    case CREATE_SMURF:
      return {...state, smurfs: action.payload, creatingSmurf: false };
    case CREATING_SMURF:
      return {...state, creatingSmurf: true};
    case ERROR:
      return {...state, gettingSmurfs: false, creatingSmurf: false, error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  smurfs: SmurfsReducer,
  form: FormReducer,
})

export default rootReducer;