/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING_SMURFS, ADDING_SMURF, UPDATING_SMURF, DELETING_SMURF, ERROR, FETCHED_SMURFS } from '../actions';
import {rootReducer} from 'redux';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this*/
 const InitialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


const smurfReducer = (state = InitialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return{
        ...state,
        fetchingSmurfs: true,
      }
    case FETCHED_SMURFS:
      return{
        ...state,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload]
      }
    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default smurfReducer;
