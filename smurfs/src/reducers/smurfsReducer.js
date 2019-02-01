import { FETCHING, LOAD_SMURFS, ERROR } from '../actions/smurfsActions';

/*
  Mykeal: 
  1.  Should initialState contain all actions from smurfsActions.js?  
  2. And should fetcingSmurfs in your corrections be named fetchingSmurfs to match my orginal code? 
  {
    smurfs: [],
    fetchingSmurfs: false
    addingSmurf: false
    updatingSmurf: false
    deletingSmurf: false
    error: null
  }
 */
const initialState = {
  smurfs: [],
  // error: null,
  // fetchingSmurfs: false,
  // createSmurf: false,
  // updateSmurf: false,
  // deleteSmurf: false
};
/*
// Nov-15
const reducer = (state = initialState, action=> { console.log("IN THE REDUCER", state, action); return state })
*/

export default (state = initialState, action) => {
  switch(action.type){
    case FETCHING:
      return Object.assign({}, state, {fetching: true})

    case LOAD_SMURFS:
      return Object.assign({}, ...state, {smurfs: action.payload})

  // add newSmurf

    case ERROR:
      return Object.assign({}, state, {error: action.errorMessage, fetching: false})

    default:
      return state
  }
}
