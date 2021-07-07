import { combineReducers } from 'redux'
import { smurfsReducer } from './smurfsReducer'
import { apiReducer } from './apiReducer'

const rootReducer = combineReducers({
  smurfs: smurfsReducer,
  api: apiReducer
})

export default rootReducer
