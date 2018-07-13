import { FETCHING, FETCHED, POSTING, POSTED, DELETED, ERROR } from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}


const dataSmurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        smurfs: [],
        fetchingSmurfs: true,
        fetchedSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null,
      });
    case FETCHED:
      return Object.assign({}, state, {
        smurfs: action.payload,
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null,
      })
    case POSTING:
      return Object.assign({}, state, {
        smurfs: [],
        fetchingSmurfs: false,
        fetchedSmurfs: false,
        addingSmurf: true,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null,
      })
    case POSTED:
      return Object.assign({}, state, {
        smurfs: action.payload,
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null,
      })
    case DELETED:
      return Object.assign({}, state, {
        smurfs: action.payload,
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null,
      })
    case ERROR:
      return Object.assign({}, state, {
        smurfs: [],
        fetchingSmurfs: false,
        fetchedSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload,
      })
    default:
      return state;
  }
}

export default dataSmurfReducer;