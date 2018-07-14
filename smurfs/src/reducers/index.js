/* prettier-ignore */
import {FETCHING, FETCHED, ERROR, ADDING, ADDED, DELETING, DELETED, EDITING, EDITED, ADDCLICKED} from '../actions';

const initialState = {
  fetchingSmurfs: false,
  smurfsFetched: false,
  smurfsSaved: false,
  savingSmurfs: false,
  updatingSmurf: false,
  smurfUpdated: false,
  deletingSmurf: false,
  smurfDeleted: false,
  smurfs: [],
  error: null,
  addClicked: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingSmurfs: true };

    case FETCHED:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        smurfsFetched: true,
      };

    case ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfsFetched: false,
        error: action.payload.stack,
      };

    case ADDING:
      return {
        ...state,
        savingSmurfs: true,
        smurfsSaved: false,
      };

    case ADDED:
      return {
        ...state,
        savingSmurfs: true,
        smurfsSaved: true,
        smurfs: action.payload,
      };

    case DELETING:
      return {
        ...state,
        deletingSmurf: true,
        smurfDeleted: false,
      };

    case DELETED:
      return {
        ...state,
        deletingSmurf: true,
        smurfDeleted: true,
        smurfs: action.payload,
      };

    case EDITING:
      return {
        ...state,
        updatingSmurf: true,
        smurfUpdated: false,
      };

    case EDITED:
      return {
        ...state,
        updatingSmurf: true,
        smurfUpdated: true,
        smurfs: action.payload,
      };

    case ADDCLICKED:
      return {
        ...state,
        addClicked: !state.addClicked,
      };

    default:
      return state;
  }
};

export default rootReducer;
