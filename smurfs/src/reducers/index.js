/*
  Be sure to import in all of the action types from `../actions`
*/
import {ADD_SMURF, ERROR, FETCHED_SMURFS, FETCHING_SMURFS} from '../actions';


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

export const smurfsReducer = (state = initialState, action) => {
  switch(action) {
    case ADD_SMURF:
    return Object.assign({}, state,{addSmurf:[...state.action.ADD_SMURF,{text: action.text, completed:false}]})
    case FETCHING_SMURFS:
    return Object.assign({}, state,{retriveSmurf:[...state.action.FETCHING_SMURFS, {text: action.text, completed: false}]})
    case  FETCHED_SMURFS:
    default:
    return state;
  }
};

