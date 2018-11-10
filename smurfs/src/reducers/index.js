import { ADD_SMURF, GET_SMURF, LOADING, ERROR } from '../actions/index';


 const initialState = {
   smurfs: [],
   loading: false,
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return Object.assign({}, state, { loading: true, error: null });
    
    case GET_SMURF:
      return Object.assign({}, state, {
        smurfs: action.payload 
      });

    case ERROR:
      return Object.assign({}, state, { error: action.payload, loading: false })
    default:
      return state;
  }
}

