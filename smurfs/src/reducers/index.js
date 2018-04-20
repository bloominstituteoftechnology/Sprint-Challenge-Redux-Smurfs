import * as actions from '../actions';

const initState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

export const rootReducer = (state = initState, action) => {
    switch(action.type) {
      case actions.FETCHSMURF:
        return {...state, fetchingSmurfs: true};
      case actions.SMURFFETCHED:
        return {...state, fetchingSmurfs: false, smurfs: action.payload};
      case actions.ERRORFETCHING:
        return {...state, fetchingSmurfs:false, error: action.payload};
      case actions.ADDSMURF:
        return {...state, addingSmurf: true};
      case actions.SMURFADDED:
        return {...state, addingSmurf: false, smurfs: action.payload};
      case actions.ERRORADDING:
        return {...state, addingSmurf: false, error: action.payload};
      default:
        return state;
    }
  } 


