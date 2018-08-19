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
        smurfs: action.payload
      })
    case UPDATING:
      return Object.assign({}, state, {
        updatingSmurf: true,
        updatedSmurf: false
      })
    case UPDATED:
      return Object.assign({}, state, {
        updatingSmurf: false,
        updatedSmurf: true,
        smurfs: action.payload
      })
    case DELETING:
      return Object.assign({}, state, {
        deletingSmurf: true,
        deletedSmurf: false
      })
    case DELETED:
      return Object.assign({}, state, {
        deletingSmurf: false,
        deletedSmurf: true,
        smurfs: action.payload
      })
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
