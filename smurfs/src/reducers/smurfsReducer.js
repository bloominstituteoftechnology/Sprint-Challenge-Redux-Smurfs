import * as actions from '../actions';

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const smurfsReducer = (state=initialState, action) => {
  switch(action.type) {
    case actions.GETTING_SMURFS:
      return {...state, gettingSmurfs: true};
    case actions.GET_SMURFS:
      return {...state, smurfs: action.payload, gettingSmurfs: false};
    case actions.UPDATING_SMURF:
      return {...state, updatingSmurf: true};
    case actions.UPDATE_SMURF:
      return {...state, smurfs: action.payload, updatingSmurf: false};
    case actions.DELETING_SMURF:
      return {...state, deletingSmurf: true};
    case actions.ADDING_SMURF:
      return {...state, addingSmurf: true};
    case actions.ADD_SMURF:
      return {...state, smurfs: action.payload, addingSmurf: false};
    case actions.ERROR:
      return {...state, 
              gettingSmurfs: false,
              addingSmurf: false,
              deletingSmurf: false,
              updatingSmurf: false,
              error: action.payload
            };
    default:
      return state;
  };
};

// export default smurfsReducer;