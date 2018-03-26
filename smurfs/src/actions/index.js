import axios from 'axios'

export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const HIDE_LOADING = 'HIDE_LOADING'
export const HIDE_ERROR = 'HIDE_ERROR'
export const REQ_SUCCESS = 'REQ_SUCCESS'
export const DEL_SUCCESS = 'DEL_SUCCESS'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'

const URL = 'http://localhost:3333/smurfs'

export const getSmurfs = () => async dispatch => {
  try {
    dispatch({ type: LOADING })
    const { data } = await axios.get(URL)
    dispatch({ type: REQ_SUCCESS, data })
    dispatch({ type: HIDE_ERROR })
    dispatch({ type: HIDE_LOADING })
  } catch (e) {
    handleError(e, dispatch)
  }
}

export const addSmurf = smurf => async dispatch => {
  try {
    dispatch({ type: LOADING })
    const { data } = await axios.post(URL, smurf)
    dispatch({ type: REQ_SUCCESS, data })
    dispatch({ type: HIDE_ERROR })
    dispatch({ type: HIDE_LOADING })
  } catch (e) {
    handleError(e, dispatch)
  }
}

export const deleteSmurf = id => async dispatch => {
  try {
    dispatch({ type: LOADING })
    await axios.delete(URL + '/' + id)
    dispatch({ type: DEL_SUCCESS, id })
    dispatch({ type: HIDE_ERROR })
    dispatch({ type: HIDE_LOADING })
  } catch (e) {
    handleError(e, dispatch)
  }
}

export const updateSmurf = (id, newInfo) => async dispatch => {
  try {
    dispatch({ type: LOADING })
    const data = await axios.put(URL + '/' + id, newInfo)
    dispatch({ type: UPDATE_SUCCESS, id, data })
    dispatch({ type: HIDE_ERROR })
    dispatch({ type: HIDE_LOADING })
  } catch (e) {
    handleError(e, dispatch)
  }
}

const handleError = (error, dispatch) => {
  dispatch({ type: ERROR, error })
  dispatch({ type: HIDE_LOADING })
}