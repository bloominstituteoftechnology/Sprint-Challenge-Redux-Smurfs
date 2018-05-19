import { 
  SUCCESS_GET_SMURFS, 
  SUCCESS_POST_SMURF, 
  SUCCESS_DELETE_SMURF, 
  PENDING_SMURFS, 
  ERROR_SMURFS 
} from '../actions'; 

 
let initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case PENDING_SMURFS:
      return Object.assign({}, state, {fetchingSmurfs: true})
    case SUCCESS_GET_SMURFS:
      return Object.assign({}, state, {smurfs: state.smurfs.concat(action.payload), fetchingSmurfs: false, error: null})
    case SUCCESS_POST_SMURF:
      return Object.assign({}, state, {smurfs: (action.payload), addingSmurf: true, error: null })
    case SUCCESS_DELETE_SMURF:
      return Object.assign({}, state, {smurfs: (action.payload), deletingSmurf: true, fetchingSmurfs: false})
    case ERROR_SMURFS:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload})
    default: 
      return state;
  }
}

export default smurfsReducer;
