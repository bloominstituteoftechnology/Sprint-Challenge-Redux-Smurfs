import { combineReducers } from "redux"
import { singleSmurfReducer } from "./singleSmurfReducer"
import { smurfsReducer } from "./smurfsReducer"

export default combineReducers({
  singleSmurfReducer,
  smurfsReducer
})