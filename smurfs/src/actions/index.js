import axios from 'axios'

export const GET_SMURFS = 'GET_SMURFS'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_ERROR = 'GET_SMURFS_ERROR'

export const ADD_SMURF = 'ADD_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR'

export const getSmurfs = () => {
    return dispatch => {
        dispatch({ type: GET_SMURFS })
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: GET_SMURFS_ERROR })
            })
    }
}

export const addSmurf = smurf => {
    return dispatch => {
        dispatch({ type: ADD_SMURF })
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then(res =>
                dispatch({
                    type: ADD_SMURF_SUCCESS,
                    payload: res.data,
                })
            )
            .catch(err => {
                console.log(err)
                dispatch({ type: ADD_SMURF_ERROR })
            })
    }
}
