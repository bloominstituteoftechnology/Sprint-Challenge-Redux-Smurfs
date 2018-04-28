import axios from 'axios'
import {
  FETCHING,
  CREATING,
  UPDATING,
  DELETING,
  SUCCESS,
  ERROR,
} from './types'

const ROOT_URL = 'http://localhost:3333'

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING })
  axios.get(`${ROOT_URL}/smurfs`)
    .then((response) => {

      console.log('response:', response)

      dispatch({ type: SUCCESS, payload: response.data })
    }).catch(error => dispatch({ type: ERROR, error }))
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: CREATING })
  axios.post(`${ROOT_URL}/smurfs`, smurf)
    .then(({ data }) => {
      dispatch({ type: SUCCESS, payload: data })

    })
    .catch(error => {
      dispatch({ type: ERROR, error })
    })
}

