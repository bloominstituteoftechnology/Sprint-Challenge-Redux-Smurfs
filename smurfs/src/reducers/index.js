import { LOADING, GET_SMURFS, ERROR, ADD_SMURF, UPDATE_SMURF, DELETE_SMURF } from '../actions/index';

const initialState = {
  smurfs: [],
  loading: false,
  error: null
};

 export default (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return Object.assign({}, state, {loading: true})
        case GET_SMURFS:
            return Object.assign({}, state, {loading: false, error: '', smurfs: action.smurfs})
        case ERROR:
            return Object.assign({}, state, {loading: false, error: action.error})
        case ADD_SMURF:
            return Object.assign({}, state, {loading: false, error: '', smurfs: action.smurfs})
        case UPDATE_SMURF:
            return Object.assign({}, state, {loading: false, error: '', smurfs: action.smurfs})
        case DELETE_SMURF:
            return Object.assign({}, state, {loading: false, error: '', smurfs: action.smurfs})
        default:
            return state
    }
} 
