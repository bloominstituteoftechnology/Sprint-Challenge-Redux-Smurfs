/* prettier-ignore */
import {FETCHING, FETCHED, ERROR, ADDING, ADDED, DELETING, DELETED, EDITING, EDITED, ADDCLICKED} from '../actions';

const initialState = {
  fetchingSmurfs: false,
  smurfsFetched: false,
  smurfsSaved: false,
  savingSmurfs: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  smurfs: [],
  error: null,
  addClicked: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingSmurfs: true,
      });

    case FETCHED:
      return Object.assign({}, state, {
        smurfs: action.payload,
        fetchingSmurfs: false,
        smurfsFetched: true,
      });

    case ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        smurfsFetched: false,
        error: action.payload.stack,
      });

    case ADDING:
      return Object.assign({}, state, {
        savingSmurfs: true,
        smurfsSaved: false,
      });

    case ADDED:
      return Object.assign({}, state, {
        savingSmurfs: true,
        smurfsSaved: true,
        smurfs: action.payload,
      });

    case DELETING:
      return Object.assign({}, state, {
        deletingFriend: true,
        friendDeleted: false,
      });

    case DELETED:
      return Object.assign({}, state, {
        deletingFriend: true,
        friendDeleted: true,
        smurfs: action.payload,
      });

    case EDITING:
      return Object.assign({}, state, {
        updatingFriend: true,
        friendUpdated: false,
      });

    case EDITED:
      return Object.assign({}, state, {
        updatingFriend: true,
        friendUpdated: true,
        smurfs: action.payload,
      });

    case ADDCLICKED:
      console.log('clcike', state.addClicked);
      return Object.assign({}, state, {
        addClicked: !state.addClicked,
      });

    default:
      return state;
  }
};

export default rootReducer;
