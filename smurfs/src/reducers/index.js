import { ADD_SMURF, GET_SMURF, LOADING, ERROR, DELETE_SMURF, UPDATE_SMURF, UPDATE_FORM } from '../actions/index';


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
        smurfs: action.payload,
        loading: false,
        error: null 
      });

    case ADD_SMURF:
    return Object.assign({}, state, {
      smurfs: action.payload,
      loading: false,
      error: null
    });

    case DELETE_SMURF:
      return Object.assign({}, state, {
        smurfs: action.payload,
        loading: false,
        error: null
      });
    
    case UPDATE_FORM:
      return Object.assign({}, state, {updatingSmurf: true})

    case UPDATE_SMURF:
      return Object.assign({}, state, {
        smurfs: action.payload,
        loading: false,
        error: false,
        updatingSmurf: false
      })

    case ERROR:
      return Object.assign({}, state, { error: action.payload, loading: false })
    default:
      return state;
  }
}

