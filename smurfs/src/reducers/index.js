import {GRABBING_SMURFS, SMURFS_GRABBED, GRABBING_SMURFS_ERROR, 
CREATING_SMURF, SMURF_CREATED, CREATING_SMURF_ERROR, UPDATING_SMURF, SMURF_UPDATED, UPDATING_SMURF_ERROR,
 KILLING_SMURF, SMURF_KILLED, KILLING_SMURF_ERROR} from '../actions'

 const initialState = {
   smurfs: [],
   grabbingSmurfs: false,
   smurfsGrabbed: false,
   creatingSmurf: false,
   smurfCreated: false,
   updatingSmurf: false,
   smurfUpdated: false,
   killingSmurfs: false,
   smurfKilled: true,
   error: null
 }

 const smurfReducer = (state = initialState, action) => {
   switch(action.type) {
    case GRABBING_SMURFS:
      return {...state, grabbingSmurfs: true};
    case SMURFS_GRABBED:
      return {...state, grabbingSmurfs: false, smurfsGrabbed: true, smurfs: action.payload};
    case GRABBING_SMURFS_ERROR:
      return {...state, grabbingSmurfs: false, error: action.paylod};
    case CREATING_SMURF:
      return {...state, creatingSmurf: true};
    case SMURF_CREATED:
      return {...state, creatingSmurf: false, smurfCreated: true, smurfs: action.payload};
    case CREATING_SMURF_ERROR:
      return {...state, creatingSmurf: false, error: action.payload};
    case UPDATING_SMURF:
      return {...state, updatingSmurf: true};
    case SMURF_UPDATED:
      return {...state, updatingSmurf: false, smurfUpdated: true, smurfs: action.payload};
    case UPDATING_SMURF_ERROR:
      return {...state, updatingSmurf: false, error: action.payload};
    case KILLING_SMURF:
      return {...state, killingSmurfs: true};
    case SMURF_KILLED:
      return {...state, killingSmurfs: false, smurfKilled: true, smurfs: action.payload};
    case KILLING_SMURF_ERROR:
      return {...state, killingSmurfs: false, error: action.payload};
    default:
      return state;
   }
 }


 export default smurfReducer;
