import { smurfsReducer } from "./SmurfsReducer";
import { loadingReducer } from "./LoadingReducer";
import { combineReducers } from "redux";

export default combineReducers({
  smurfs: smurfsReducer,
  fetching: loadingReducer
});
