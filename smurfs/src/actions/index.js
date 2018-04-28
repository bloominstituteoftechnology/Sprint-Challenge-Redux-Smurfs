import axios from 'axios'

export const PENDING = 'PENDING';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const ERROR = 'ERROR';

export const getSmurfs = () => {
  // const request = axios.get('/smurfs')
  return (dispatch) => {
      axios.get(`http://localhost:3333/smurfs`)
        .then((response) => {
          dispatch({ type: FETCHING_SMURFS, payload: response })
        })
        .catch((error) => {
          dispatch({ type: ADDING_SMURF, payload: error })

        })
    }
}

export const addSmurf = (smurf) => {
  return (dispatch) => {
    axios.post(`http://localhost:3333/smurfs/`, smurf)
      .then((response) => {
        dispatch({ type: ADDING_SMURF, payload: response.data })
      })
      .catch((error) => {
        dispatch({ type: ADDING_SMURF, payload: error })
      })
  }
}

export const updateSmurf = () => {
  return
}

export const deleteSmurf = () => {
  return
}

export const error = () => {
  return
}