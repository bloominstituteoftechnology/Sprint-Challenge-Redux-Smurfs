import { FETCHING, SUCCESS, ERROR, DELETING, DELETED } from '../actions';


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
    case DELETING:
      return {...state, deletingSmurfs: true}
    case DELETED:
      return {...state, deletingSmurfs: false, smurfs: state.smurfs.filter(smurf => smurf.id !== action.smurf.id)}
    case SUCCESS:
      return {...state, fetchingSmurfs: false, smurfs: action.smurfs}
    case ERROR:
      return {...state, deleteSmurfs: false, updatingSmurfs: false, fetchingSmurfs: false, error: action.error}
    default:
      return state
  }
}