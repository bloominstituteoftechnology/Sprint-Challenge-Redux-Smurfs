import * as actions from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null,
 }

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.FETCHINGSMURF:
      return {...state, fetchingSmurfs: true};
    case actions.SMURFSFETCHED:
      return {...state, fetchingSmurfs: false, smurfs: action.payload};
    case actions.ERRORFETCHINGSMURFS:
      return {...state, fetchingSmurfs:false, error: action.payload};
    case actions.ADDINGSMURF:
      return {...state, addingSmurf: true};
    case actions.SMURFADDED:
      return {...state, addingSmurf: false, smurfs: action.payload};
    case actions.ERRORADDINGSMURF:
      return {...state, addingSmurf: false, error: action.payload};
    default:
      return state;
  }
}