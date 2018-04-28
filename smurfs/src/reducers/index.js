import { FETCHING, SUCCESS, ERROR } from '../actions';


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
    case SUCCESS:
      return {...state, fetchingSmurfs: false, smurfs: action.smurfs}
    case ERROR:
      return {...state, fetchingSmurfs: false, error: action.error}
    default:
      return state
  }
}