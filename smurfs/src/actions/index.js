import axios from 'axios'

export const GET_SMURFS = 'GET_SMURFS'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_ERROR = 'GET_SMURFS_ERROR'

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
