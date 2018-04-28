import { FETCHING, SUCCESS, ERROR, DELETING, DELETED, PENDING, UPDATED } from '../actions';


const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null,
 }

export default (state=initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {...state, fetchingSmurfs: true}
    case PENDING:
      return {...state, updatingSmurf: true}
    case UPDATED:
      return {...state, updatingSmurf: false, smurfs: state.smurfs.filter(smurf => smurf.id !== action.smurf.id).concat(action.smurf)}
    case DELETING:
      return {...state, deletingSmurfs: true}
    case DELETED:
      return {...state, deletingSmurfs: false, smurfs: state.smurfs.filter(smurf => smurf.id !== action.smurf.id)}
    case SUCCESS:
      return {...state, fetchingSmurfs: false, smurfs: action.smurfs}
    case ERROR:
      return {...state, deleteSmurfs: false, updatingSmurf: false, fetchingSmurfs: false, error: action.error}
    default:
      return state
  }
}