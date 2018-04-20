import { combineReducers } from 'redux'
import { reducer } from 'redux-form'
import { LOADING, HIDE_LOADING, ERROR, HIDE_ERROR, REQ_SUCCESS, DEL_SUCCESS, UPDATE_SUCCESS } from '../actions'

const initState = {
  data: [],
}

const main = (state = initState, action) => {
  switch(action.type) {
    case REQ_SUCCESS:
      return {...state, data: action.data }
    case DEL_SUCCESS:
      return {...state, data: state.data.filter(obj => obj.id !== action.id) }
    case UPDATE_SUCCESS:
      return {...state, data: state.data.map(obj => obj.id === action.id ? obj = action.data : obj)}
    default:
      return state
  }
}

const loading = (isLoading = false, action) => {
  switch (action.type) {
    case LOADING:
      return true
    case HIDE_LOADING:
      return false
    default:
      return isLoading
  }
}

const errors = (error = null, action) => {
  switch (action.type) {
    case ERROR:
      return action.error
    case HIDE_ERROR:
      return error = null
    default:
      return error
  }
}

export default combineReducers({ main, loading, errors, form: reducer })