import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ON_HANDLE_SUBMIT
} from '../actions';

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
  //  updatingSmurf: false
  //  deletingSmurf: false
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                fetchingSmurfs: true
            };
        case FETCH_SUCCESS:
            // console.log('FETCH... payload', action)
            return {
                ...state,
                fetchingSmurfs: false,
                addingSmurf: false,
                error: null,
                smurfs: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state, 
                fetchingSmurfs: false,
                addingSmurf: false,
                error: action.payload
            };
        case ON_HANDLE_SUBMIT:
            console.log('from ON_HANDLE_SUBMIT', state)
            return {
                ...state, 
                fetchingSmurfs: false,
                addingSmurf: true
                // friends: state.friends.map(friend => 
                //     friend.id === action.payload ? {...friend} : friend)
                }
        default: 
            return state;
    }
};