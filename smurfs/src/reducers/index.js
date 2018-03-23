import * as actionTypes from "../actions/index";


const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 }

const rootReducer = (state = initialState, action) => {
  console.log(`The reducer ran ${action.type}`);
  switch (action.type) {
    case actionTypes.FETCH_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case actionTypes.SMURFS_FETCHED:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case actionTypes.FETCH_ERROR:
      console.log(action.errorMessage);
      return {
        ...state,
        fetchingSmurfs: false,
        showUi: true,
        error: action.errorMessage,
      };
    case actionTypes.SAVE_SMURF:
      return {
        ...state,
        addingSmurf: true,
        fetchingSmurfs: true
      };
    case actionTypes.SMURF_SAVED:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        addingSmurf: false
      };
    case actionTypes.SAVE_ERROR:
      console.log(action.errorMessage);
      return {
        ...state,
        addingSmurf: false,
        error: action.errorMessage,
      };
    case actionTypes.DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurfs: true,
        error: null
      };
    case actionTypes.SMURF_DELETED:
      console.log(action);
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload.id),
        deletingSmurfs: false,
        error: null
      };
    case actionTypes.DELETE_ERROR:
      return console.log(action.errorMessage);
       return {
        ...state,
        deletingSmurf: false,
        error: action.errorMessage,
      };
    case actionTypes.UPDATE_SMURF:
      return { ...state, updatingSmurf: true };     
    case actionTypes.SMURF_UPDATED:
      console.log(action);
      return {
        ...state,
        smurfs: state.smurfs.map(smurf => {
          if (smurf.id === action.payload.id) return action.payload;
          return smurf; }),
        updatingSmurf: false,
        error: null
      };
    case actionTypes.UPDATE_ERROR:
      console.log(action.errorMessage);
      return {
        ...state,
        updatingSmurf: false,
        error: action.errorMessage,
      };
    default:
      return state;
  }
};

export default rootReducer;