/*
  Be sure to import in all of the action types from `../actions`
*/
import {ADD_SMURF, ERROR, FETCHED_SMURFS, FETCHING_SMURFS, addSmurf} from '../actions';


//default state
const initialState = [{text:'testy smurf', completed: false, id: 0 }]
/*
 Your initial/default state for this project could look a lot like thi
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export const smurfsReducer = (statev = initialState, action) => {
  switch(action) {
    case ADD_SMURF:
    case FETCHING_SMURFS:
    case  FETCHED_SMURFS:
    default:
    return

  }
};

