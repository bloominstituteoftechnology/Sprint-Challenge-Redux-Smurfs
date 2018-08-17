import {
  FETCHING_SMURFS, FETCHED_SMURFS, POSTING_SMURF, POSTED_SMURF, UPDATING_SMURF, UPDATED_SMURF, DELETING_SMURF, DELETED_SMURF, SMURF_CLICKED,ERROR
} from '../actions';
const initialState = {
  smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
   doubleClicked : false, 
   current: null,
}
export const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_SMURFS:
      return {
        ...state, fetchingSmurfs: true
      }
    case FETCHED_SMURFS:
      return {
        ...state, fetchingSmurfs: false, smurfs: action.payload
      }
    case POSTING_SMURF:
      return {
        ...state, addingSmurf: true
      }
    case POSTED_SMURF: 
      return {
        ...state, addingSmurf: false, smurfs: action.payload
      }
    case UPDATING_SMURF:
      return {
        ...state, updatingSmurf: true,
      }
    case UPDATED_SMURF:
      return {
        ...state, updatingSmurf: false, smurfs: action.payload, current: null, doubleClicked: false
      }
    case DELETING_SMURF: 
      return {
        ...state, deletingSmurf: true, 
      }
    case DELETED_SMURF:
      return {
        ...state, deletingSmurf: false, smurfs: action.payload
      }
    case SMURF_CLICKED:
      return{
        ...state, doubleClicked: !state.doubleClicked, current: action.current
      }
    case ERROR:
      return {
        ...state, fetchingSmurfs: false, addingSmurf: false, updatingSmurf: false, deletingSmurf: false, error: action.error
      }
    default:
      return state; 
  }
}
