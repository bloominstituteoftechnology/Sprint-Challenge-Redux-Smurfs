import { combineReducers } from 'redux'
import { smurfin } from './smurfin'


export default combineReducers({
  smurfin
})

/*
  Be sure to import in all of the action types from `../actions`
*/
import { LOADING, FETCH_SMURFS, ADD_SMURF, UPDATE_SMURF, DELETE_SMURF, ERROR } from '../actions'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/

const intialState = {
    smurfs: [],
    loading: false,
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
}


export const smurfin = (state = intialState, action) => {

    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }
        case FETCH_SMURFS:
            return { ...state, smurfs: action.payload, loading: false }
        case ADD_SMURF:
            return { ...state, smurfs: action.payload, addingSmurf: true, loading: false }
        case UPDATE_SMURF:
            return { ...state, smurfs: action.payload, updatingSmurf: true, loading: false }
        case DELETE_SMURF:
            return { ...state, smurfs: action.payload, deletingSmurf: true, loading: false }
        case ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    }
}
