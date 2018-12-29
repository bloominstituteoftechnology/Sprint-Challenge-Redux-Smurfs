import { SMURF_FETCH }  from '../actions';
import { SMURF_FETCHED } from '../actions';
import { SMURF_ADD } from '../actions';
import { SMURF_ADDED } from '../actions';
import { SMURF_ERROR } from '../actions';

const initialState = {
   smurfs: [],
   smurfFetch: false,
   smurfFetched: false,
   smurfAdd: false,
   smurfAdded: false,
   error: null
 }

export const smurfReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SMURF_FETCH:
      return {...state, smurfFetch: true };
    case SMURF_FETCHED:
      return {...state, smurfFetch: false, smurfFetched: true, smurfs: payload };
    case SMURF_ADD:
      return {...state, smurfAdd: true };
    case SMURF_ADDED:
      return {...state, smurfAdd: false, smurfAdded: true, smurfs: payload };
    case SMURF_ERROR:
      return {...state, error: payload };
    default:
      return state
  }
}