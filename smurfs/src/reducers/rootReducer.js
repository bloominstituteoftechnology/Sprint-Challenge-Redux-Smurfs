import { combineReducers } from 'redux';

import getSmurfsReducer from './getSmurfsReducer';

export default combineReducers({
  smurfsReducer: getSmurfsReducer
});
