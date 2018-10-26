import axios from 'axios'

export const GET_SMURFS = 'GET_SMURFS'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_ERROR = 'GET_SMURFS_ERROR'

export const ADD_SMURF = 'ADD_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR'

export const DELETE_SMURF = 'DELETE_SMURF'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_ERROR = 'DELETE_SMURF_ERROR'

export const UPDATE_SMURF = 'UPDATE_SMURF'
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS'
export const UPDATE_SMURF_ERROR = 'UPDATE_SMURF_ERROR'

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
export const deleteSmurf = id => {
    return dispatch => {
        dispatch({ type: DELETE_SMURF })
        axios
            .delete(`http://localhost:3333/smurfs/${id}`)
            .then(res => {
                dispatch({
                    type: DELETE_SMURF_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: DELETE_SMURF_ERROR,
                })
            })
    }
}

export const updateSmurf = (id, update) => {
    return dispatch => {
        dispatch({ type: UPDATE_SMURF })
        axios
            .put(`http://localhost:3333/smurfs/:${id}`, update)
            .then(res => {
                dispatch({
                    type: UPDATE_SMURF_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: UPDATE_SMURF_ERROR,
                })
            })
    }
}
