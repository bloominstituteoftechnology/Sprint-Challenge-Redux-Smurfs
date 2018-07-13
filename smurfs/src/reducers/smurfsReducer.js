import { GET_SMURFS } from '../actions'

export const smurfsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SMURFS:
      return [ ...action.payload ]
    default:
      return state
  }
}
