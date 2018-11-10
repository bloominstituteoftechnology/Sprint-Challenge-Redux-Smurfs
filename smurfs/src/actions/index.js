import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:3333/smurfs')
      .then( response => {
                dispatch({type: GET_SMURFS, smurfs: response.data})
            })
      .catch(error => {
                dispatch({type: ERROR, error: 'Trouble loading smurfs'})
            })
  }
}

export const addSmurf = (newSmurf) => {
    return (dispatch) => {
        dispatch({type: LOADING})
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(response => {
                dispatch({type: ADD_SMURF, smurfs: response.data})
            })
            .catch(error => {
                dispatch({type: ERROR, error: 'Trouble adding smurf'})
            })
    }
}

export const updateSmurf = (updatedSmurf) => {
    return(dispatch) => {
        dispatch({type: LOADING})
        axios.put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
            .then(response => {
                dispatch({type: UPDATE_SMURF, smurfs: response.data})
            })
            .catch(error => {
                dispatch({type: ERROR, error: 'Trouble updating smurf'})
            })
    }
}

export const deleteSmurf = id => {
    return(dispatch) => {
        dispatch({type: LOADING})
        axios.delete(`http://localhost:3333/smurfs/${id}`)
            .then(response => {
                dispatch({type: DELETE_SMURF, smurfs: response.data})
            })
            .catch(error => {
                dispatch({type: ERROR, error: 'Trouble deleting smurf'})
            })
    }
}