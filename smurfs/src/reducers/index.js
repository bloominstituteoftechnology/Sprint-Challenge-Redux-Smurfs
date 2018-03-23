import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { GET_SMURFS, GETTING_SMURFS, CREATE_SMURF, CREATING_SMURF, ERROR } from '../actions';


const initialState = {
  smurfs: [],
  gettingSmurf: false,
  creatingSmurf: false,
  error: null,
};

const SmurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return { ...state, smurfs: action.payload, gettingSmurfs: false };
    case GETTING_SMURFS:
      return { ...state, gettingSmurfs: true }
    case CREATE_SMURF:
      return { ...state, smurfs: action.payload, creatingSmurf: false };
    case CREATING_SMURF:
      return { ...state, creatingSmurf: true };
    case ERROR:
      return { ...state, gettingSmurfs: false, creatingSmurf: false, error: action.payload };
    default: 
      return state;
  }
};

const rootReducer = combineReducers({
  smurfs: SmurfsReducer,
  form: FormReducer,
})

export default rootReducer;