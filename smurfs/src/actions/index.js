import axios from 'axios'
export const GET_SMURFS = "GET_SMURFS";
export const GETTING_SMURFS = "GETTING_SMURFS";
export const ERROR = "ERROR";

export const getSmurfs = () => {
    return (dispatch) => {
        dispatch({type: GETTING_SMURFS})
        axios.get(`http://localhost:3333/smurfs`)
        .then(resonse => {
            dispatch({type: GET_SMURFS, smurfs: response.data})
        })
        .catch(err => {
            dispatch({type: ERROR, errorMessage: "could not retrieve smurf"})
        })
    }
}

export const addSmurf = (newSmurf) => {
    return (dispatch) => {
        dispatch({type: GETTING_SMURFS})
        axios.post(`http://localhost:3333/smurfs`, newSmurf)
        .then(response => {
            dispatch({type:GET_SMURFS, smurfs: response.data})
        })
        .catch(err => {
            dispatch({type:ERROR, errorMessage: "could not create smurf"})
        })
    }
}