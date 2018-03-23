import { ADD_SMURF } from '../actions/smurfs'
import { RECEIVE_DATA } from '../actions/receivedata'

export default function smurfs (state = [], action) {
  switch(action.type) {
    case ADD_SMURF :
      return state.concat([action.smurf])
    case RECEIVE_DATA :
      return action.smurfs
    default :
      return state
  }
}
