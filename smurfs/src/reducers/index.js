import { FETCHING, FETCHED, PENDING, SUCCESS, ERROR } from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  fetchedSmurfs: false,
  addingSmurf: false,
  addedSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}


const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingSmurfs: true
      });
    case PENDING:
        return Object.assign({}, state, {
          addingSmurf: true
        });
    case FETCHED:
      return Object.assign({}, state, {
        smurfs: state.smurfs.concat(action.payload),
        fetchedSmurfs: true,
        fetchingSmurfs: false
      });
    case SUCCESS:
      return Object.assign({}, state, {
        smurfs: state.smurfs.concat(action.payload),
        addedSmurf: true,
        addingSmurf: false
      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.payload,
        fetchedSmurfs: false,
        fetchingSmurfs: false
      })
    default:
      return state;
  }
}

export default smurfReducer;