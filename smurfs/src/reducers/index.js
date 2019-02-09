import { LOADING, SUCCESS, FAILURE } from '../actions/index';

const initialState = {
  smurfs: [],
  loading: false,
  error: "",
}

export default function reducer(state= initialState, action) {
  switch(action.type) {
    case LOADING:
      return {
        ...state,
        smurfs: [],
        loading: true,
        err: ''
      }
    
    case SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        loading: false,
        err: ''
      }

    case FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload
      }

    default: 
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
