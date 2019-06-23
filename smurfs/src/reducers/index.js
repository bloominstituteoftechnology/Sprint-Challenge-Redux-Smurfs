import { FETCH_SMURF_FAILURE, FETCH_SMURF_START, FETCH_SMURF_SUCCESS } from '../actions';

//  Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialSatae = {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
function reducer (state = initialSatae, action {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: '',
        fetchingSmurfs: true,
      };
      case FETCH_SMURF_SUCCESS:
        return{
          ...state,
          error: '',
          fetchingSmurfs: false,
          smurfs: action.payload
        };      
        case FETCH_SMURF_FAILURE:
        return{
          ...state,
          error: '',
          fetchingSmurfs: false,
        };
      default:
        return state;
  }
})