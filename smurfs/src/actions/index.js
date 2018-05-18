
import axios from 'axios';
import { Agent } from 'https';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
// export const UPDATING_SMURF = 'UPDATING_SMURF';
// export const SMURF_UPDATED = 'SMURF_UPDATED';
// export const DELETING_SMURF = 'DELETING_SMURF';
// export const SMURF_DELETED = 'SMURF_DELETED';
export const ERROR = 'ERROR';



export const fetchSmurfs = () => {
  const getSmurfs = axios.get('http://localhost:3333/smurfs')
    return function(dispatch) {
      dispatch({ type: FETCHING_SMURFS })
      getSmurfs
      .then(res => {
        dispatch({
          type: SMURFS_FETCHED,
          payload: res.data
        })
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: error
        })
      })
    }
}

export const addSmurf = (smurfName, smurfAge, smurfHeight) => {
  const add = axios.post(`http://localhost:3333/smurfs`, {
    name: smurfName,
    age: smurfAge, 
    height: smurfHeight
  })

  return function(dispatch) {
    dispatch({ ADDING_SMURF })
    add 
    .then(res => {
      dispatch({
        type: SMURF_ADDED,
        payload: res.data
      })
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      })
    })
  }
}