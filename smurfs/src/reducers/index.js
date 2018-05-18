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
    case CREATING:
      return Object.assign({}, state, {
        creatingSmurf: true,
        createdSmurf: false
      })
    case CREATED:
      return Object.assign({}, state, {
        creatingSmurf: false,
        createdSmurf: true,
        smurfs: state.smurfs.concat(action.payload)
      })
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
