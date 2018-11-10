/*
  Be sure to import in all of the action types from `../actions`
*/
import { LOADING, GET_SMURFS } from '../actions'
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

export const smurfReducer = (state = intialState, action) => {

    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }
        case GET_SMURFS:
            return { ...state, smurfs: action.payload, laoding: false }
        default:
            return state
    }
}