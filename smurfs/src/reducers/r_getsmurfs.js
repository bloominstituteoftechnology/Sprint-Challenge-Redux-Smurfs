import { GET_SMURFS, ADD_SMURF } from '../actions/actions';

const initialState = {
  fetchingSmurf: true,
  smurfs: [],
};

export const getSmurfs = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
    case ADD_SMURF:
      return Object.assign({}, state, { fetchingSmurf: false, smurfs: action.payload });
      
    default:
      return state;
  }
};