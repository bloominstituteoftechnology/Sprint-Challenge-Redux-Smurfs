import axios from 'axios'

export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const FETCHED_SMURFS = 'FETCHED_SMURFS'
export const ADDING_SMURF = 'ADDING_SMURF'
export const ADDED_SMURF = 'ADDED_SMURF'
export const UPDATING_SMURF = 'UPDATING_SMURF'
export const DELETING_SMURF = 'DELETING_SMURF'
export const ERROR = 'ERROR'

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ 
      type: FETCHING_SMURFS
    })
    const promise = axios.get('http://localhost:3333/smurfs')
    promise
      .then(response => dispatch({
        type: FETCHED_SMURFS,
        payload: response.data
      }))
      .catch(error => {
        dispatch({ 
          type: error,
          error: error
        })
      })
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ 
      type: ADDING_SMURF
     })
    axios
     .post('http://localhost:3333/smurfs', smurf)
     .then(response => {
       dispatch({
         type: ADDED_SMURF,
         payload: response.data
       })
     })
  }
}