import { LOADING, GET_SMURFS, ERROR } from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

export default (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
        return {...state, fetchingSmurfs: true};
    case GET_SMURFS:
        return {...state, smurfs: action.friends, fetchingSmurfs: false};
    case ERROR:
      return {...state, error: action.errorMessage, fetchingSmurfs: false}; 
    default:
      return state;
  }
}
