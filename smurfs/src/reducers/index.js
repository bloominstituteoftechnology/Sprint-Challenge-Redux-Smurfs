import { FETCHING_DATA, DATA_FETCHED, ADDING_SMURF, SMURF_ADDED, UPDATING_SMURF, SMURF_UPDATED, DELETING_SMURF, SMURF_DELETED, DATA_ERROR, SHOW_UPDATE_FORM, HIDE_UPDATE_FORM } from '../actions';

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  showingUpdateForm: false,
  smurfToEdit: null
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case DATA_FETCHED:
      return Object.assign({}, state, { 
        smurfs: action.payload,
        fetchingSmurfs: false
      });
    case ADDING_SMURF:
      return Object.assign({}, state, { addingSmurf: true });
    case SMURF_ADDED:
      return Object.assign({}, state, { 
        smurfs: action.payload,
        addingSmurf: false
      });
    case UPDATING_SMURF:
      return Object.assign({}, state, { updatingSmurf: true });
    case SMURF_UPDATED:
      return Object.assign({}, state, { 
        smurfs: action.payload,
        updatingSmurf: false
      });
    case DELETING_SMURF:
      return Object.assign({}, state, { deletingSmurf: true });
    case SMURF_DELETED:
      return Object.assign({}, state, { 
        smurfs: action.payload,
        deletingSmurf: false
      });
    case SHOW_UPDATE_FORM:
      return Object.assign({}, state, { 
        smurfToEdit: action.payload,
        showingUpdateForm: true
      });
    case HIDE_UPDATE_FORM:
      return Object.assign({}, state, { showingUpdateForm: false });
    case DATA_ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};

export default rootReducer;