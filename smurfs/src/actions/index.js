import axios from 'axios'

export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS'
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE'
export const ADDING_SMURF = 'ADDING_SMURF'
export const ADDING_SMURF_FAILURE = 'ADDING_SMURF_FAILURE'


export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios 
    .get('http://localhost:3333/smurfs')
    .then(({ data }) => {
      console.log(data)
      dispatch({
        type: FETCHING_SMURFS_SUCCESS, 
        payload: data
      })
    }) 
    .catch(err => {
      console.log(err)
      dispatch({
        type: FETCHING_SMURFS_FAILURE,
        payload: err
      })
    })
}

export const addSmurf = smurf => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({ type: ADDING_SMURF, payload: response.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: ADDING_SMURF_FAILURE, payload: err
       })
    })
}