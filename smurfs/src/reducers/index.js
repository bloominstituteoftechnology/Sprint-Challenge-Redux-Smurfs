/*
  Be sure to import in all of the action types from `../actions`
*/
import {SUCCESSSMURFS, ERRORSMURFS, PENDINGSMURFS} from '../actions/index'

const initalState = {
  smurfs: [{age: 0, height: 0, name: "default"}],
   pendingSmurfs: false,
   addingSmurf: false,
   error: null
}


export const smurfsReducer = (state = initalState, action) => {
  switch(action.type) {
    case PENDINGSMURFS: 
    return Object.assign({}, state, {pendingSmurfs : true});
    case SUCCESSSMURFS:
    return Object.assign({}, state, {smurfs: [...action.payload], pendingSmurfs: false });
    case ERRORSMURFS:
    return Object.assign({}, state, {error: 'Failed to return smurfs', pendingSmurfs: false});
    default: 
    return state;

  }
}