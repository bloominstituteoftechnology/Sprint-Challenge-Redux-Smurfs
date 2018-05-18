import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { smurfReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css'
import App from './components/App'

const store = createStore(smurfReducer, composeWithDevTools(
  applyMiddleware(logger, thunk)
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)