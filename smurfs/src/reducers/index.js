import { FETCHING, FETCHED, ERROR, ADDING, ADDED} from '../actions';


 const initState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null,
 };

export default (state = initState, action) => {
  switch(action.type) {
    case FETCHING:
      return {...state, fetchingSmurfs: true };
    case FETCHED: 
      return {...state, smurfs: action.smurfs, fetchingSmurfs: false, error: null }
    case ADDING:
      return {...state, addingSmurf: true,}
    case ADDED:
      return {...state, smurfs: action.smurfs, addingSmurf: false, error: null }
    case ERROR: 
      return {...state, error: action.errorMessage };
    default:
      return state;
  }
}
