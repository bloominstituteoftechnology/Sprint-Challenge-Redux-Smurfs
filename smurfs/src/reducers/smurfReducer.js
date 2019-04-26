import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ON_HANDLE_SUBMIT,
  UPDATE_SMURF,
  DELETE_SMURF
} from '../actions';

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }
 
export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                fetchingSmurfs: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                fetchingSmurfs: false,
                addingSmurf: false,
                updatingSmurf: false,
                deletingSmurf: false,
                error: null,
                smurfs: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state, 
                fetchingSmurfs: false,
                updatingSmurf: false,
                addingSmurf: false,
                deletingSmurf: false,
                error: action.payload
            };
        case ON_HANDLE_SUBMIT:
            return {
                ...state, 
                fetchingSmurfs: false,
                updatingSmurf: false,
                deletingSmurf: false,
                addingSmurf: true
                }
        case UPDATE_SMURF:
            return {
                ...state,
                updatingSmurf: true,
                fetchingSmurfs: false,
                addingSmurf: false,
                deletingSmurf: false
            }
        case DELETE_SMURF:
            return {
                ...state,
                updatingSmurf: true,
                fetchingSmurfs: false,
                addingSmurf: false,
                deletingSmurf: true
            }
        default: 
            return state;
    }
};