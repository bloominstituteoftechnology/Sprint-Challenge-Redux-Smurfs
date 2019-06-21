import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_NEW_SMURF } from '../actions'

const initialState = {
    smurfs: [],
    error: '',
    fetchingSmurfs: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                error: '',
                fetchingSmurfs: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                fetchingSmurfs: false,
                smurfs: action.payload
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            };
        case ADD_NEW_SMURF:
            return {
                ...state,
                smurfs: action.payload
            }
        default:
            return state;
    }
  };
  
  export default reducer;