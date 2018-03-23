import { GETTING, GOT, ADDING, ADDED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from '../actions';


const initialState = {
  smurfs: [],
  smurf: {},
  getting: false,
  adding: false,
  updating: false,
  deleting: false,
  error: null,
};

export default (state = initialState, action = {type: 'DELETING', smurfs:[]} ) => {
  switch(action.type) {
    case GETTING:
      return { ...state, getting: true };
    case GOT:
      return { ...state, smurfs: action.smurfs, getting: false, error: null };
    case ADDING:
      return { ...state, adding: true };
    case ADDED:
      return { ...state, smurfs: action.smurfs, adding: false, error: null };
    case UPDATING:
      return { ...state, updating: true };
    case UPDATED:
      return { ...state, smurfs: action.smurfs, updating: false, error: null };
    case DELETING:
      return { ...state, deleting: true };
    case DELETED:
      return { ...state, smurfs: state.smurfs.filter(obj => obj.id !== action.id), deleting: false, error: null };
    case ERROR:
      return { ...state, error: action.errorMessage };
    default:
      return state;
  }
};
