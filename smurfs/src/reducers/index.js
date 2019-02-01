import { FETCHING_SMURFS, FETCH_SUCCESS, ADD_SUCCESS, DELETE_SUCCESS } from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


export default (state= initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case FETCH_SUCCESS: 
      return {
        ...state, 
        smurfs: [
          ...action.results
        ],
        fetchingSmurfs: false
      };
    case ADD_SUCCESS:
      return {
        ...state,
        smurfs: [
          ...action.results
        ]
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        smurfs: [
          ...action.results
        ]
      };
    default:
      return state;

  }
}
