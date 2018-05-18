
import { FETCHING_SMURFS, SMURFS_FETECHED, ERROR } from '../actions';



//Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}; 


export default (state = initialState, action) => {
 switch (action.type) {
   case FETCHING_SMURFS:
     return Object.assign({}, state, {fetchingSmurfs: action.payload})
   case SMURFS_FETECHED:
     return Object.assign({}, state, {
       smurfs: state.smurfs.concat(action.payload),
       fetchingSmurfs: false
     },
       )
   case ERROR:
    return Object.assign({}, state, {
     error: action.payload
    })
   default:
     return state;
 }
}


