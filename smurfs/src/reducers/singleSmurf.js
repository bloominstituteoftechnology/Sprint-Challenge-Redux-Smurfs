import { SINGLE_SMURF, CLEAR_SMURF } from '../actions';

const initialState = {
  singleSmurf: {},
  updating: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_SMURF:
      return {
        ...state,
        singleSmurf: action.payload,
        updating: !state.updating
      };
    case CLEAR_SMURF:
      return {
        ...state,
        singleSmurf: {},
        updating: !state.updating
      };
    default:
      return state;
  }
};
