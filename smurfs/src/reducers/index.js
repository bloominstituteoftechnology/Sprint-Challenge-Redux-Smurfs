import * as AT from '../actions/index';

const initialState = {
  getSmurf: false,
  createSmurf: false,
  deletingSmurf: false,
  error: null,
  smurf: []
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.FETCHING_SMURF:
      return Object.assign({}, state, {
        getSmurf: true });
    case AT.SUCCESS_SMURF:
      return Object.assign({}, state, {
        getSmurf: false,
        error: null,
        smurf: action.payload
      });
      case AT.CREATE_SMURF:
        return Object.assign({}, state, {
           createSmurf: true });
    case AT.ERROR:
      return Object.assign({}, state, {
        createSmurf: false,
        getSmurf: false,
        error: action.payload
      });
      case AT.DELETING_SMURF:
        return Object.assign({}, state, {deletingSmurf: true });
      case AT.SUCCESS_DELETING:
        return Object.assign({}, state, {
          deletingSmurf: false,
          error: null,
          smurf: action.payload
      })
    default:
      return state;
  }
};

export default smurfReducer;
