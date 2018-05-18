import { FETCHING, FETCHED, CREATING, CREATED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  creatingSmurf: false,
  createdSmurf: false,
  updatingSmurf: false,
  updatedSmurf: false,
  deletingSmurf: false,
  deletedSmurf: false,
  error: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingSmurf: true,
        fetchedSmurfs: false
      })
    case FETCHED:
      return Object.assign({}, state, {
        fetchingSmurf: false,
        fetchedSmurfs: true,
        smurfs: action.payload
      })
    // case CREATING:
    // case CREATED:
    // case UPDATING:
    // case UPDATED:
    // case DELETING:
    // case DELETED:
    case ERROR:
      return Object.assign({}, state, {
        fetchingSmurf: false,
        creatingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      })
    default:
      return state;
  }
}
