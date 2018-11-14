import { LOADING, LOAD_SMURFS, ERROR } from '../actions/smurfsActions';

/*
  Mykeal: 
  1.  Should initialState contain all actions from smurfsActions.js?  
  2. And should fetcingSmurfs in your corrections be named loadSmurfs to match my orginal code? 
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
  error: null,
  loadSmurfs: false
  createSmurf: false
  updateSmurf: false
  deleteSmurf: false
};

export default (state = initialState, action) => {
  switch(action.type){
    case LOADING:
      return Object.assign({}, state, {loading: true})
    case LOAD_SMURFS:
      return Object.assign({}, state, {smurfs: action.smurfs, loading: false, error: ''})
    case ERROR:
      return Object.assign({}, state, {error: action.errorMessage, loading: false})
    default:
      return state
  }
}


    Example: 