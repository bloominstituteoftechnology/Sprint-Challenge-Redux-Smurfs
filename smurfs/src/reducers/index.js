import {
  REQUEST_SENT,
  REQUEST_ERROR,
  REQUEST_SUCCESS,
  ADD,
  UPDATE,
  DELETE
} from '../actions'

const initialState =
 {
   smurfs: [],
   error: null,
   requestingData: false
 }

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_SENT:
      return {
        ...state,
        requestingData: true
    };
    case REQUEST_ERROR:
      return {
        ...state,
        requestingData: false,
        error: action.payload
    };
    case REQUEST_SUCCESS:
      return {
        ...state,
        error: null,
        requestingData: false,
        smurfs: action.payload
    };
    case ADD: 
      return {
        ...state,
        error:null,
        requestingData: false,
        smurfs: [...state.smurfs]
    };
    case UPDATE:
      return {
        ...state,
        error:null,
        requestingData: false,
        smurfs: [...state.smurfs]
    };
    case DELETE:
      return {
        ...state,
        error:null,
        requestingData: false,
        smurfs: [...state.smurfs]
    };

    default:
      return state;
  }
};
