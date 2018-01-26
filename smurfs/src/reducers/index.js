import * as actionTypes from '../actions';

const initialState = {
   smurfs: [],
   retrievingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 }

const smurfReducer = (state = initialState, action) => {
   switch(action.type) {
    case actionTypes.RETRIEVING_SMURF:
      return {...state, retrievingSmurfs: true};
    case actionTypes.SMURF_RETRIEVED:
      return {...state, smurfs: action.payload, retrievingSmurfs: false};
    case actionTypes.ADDING_SMURF:
      return {...state, addingSmurf: true};
    case actionTypes.SMURF_ADDED:
      return {...state, smurfs: action.payload, addingSmurf: false};
    case actionTypes.UPDATING_SMURF:
      return {...state, updatingSmurf: true};
    case actionTypes.SMURF_UPDATED:
      return {...state, smurfs: action.payload, updatingSmurf: false};
    case actionTypes.DELETING_SMURF:
      return {...state, deletingSmurfs: true};
    case actionTypes.SMURF_DELETED:
      return {...state, smurfs: action.payload, deletingSmurfs: false};
    case actionTypes.ERROR:
      return {
        ...state,
        retrievingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurfs: false,
        error: action.payload
      }  
      default:
      return state;
   }
 };

 export default smurfReducer;