import axios from 'axios';

export const LOADING = "LOADING";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const GET_SMURFS = "GET_SMURFS";


export const getSmurfs = () => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:3333/smurfs')
      .then( response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR_MESSAGE, errorMessage: "Hmm...there are no Smurfs here. Check your map again."})
      })
  }
}

export const addSmurf = (newSmurf) => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:3333/smurfs')
      .then( response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR_MESSAGE, errorMessage: "The Village unanimously rejected this Smurf."})
      })
  }
}

export const updateSmurf = (updatedSmurf) => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
      .then( response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR_MESSAGE, errorMessage: `This Smurf can't be updated because its awesome just the way it is. Stop pushing conformity!`})
      })
  }
}

export const deleteSmurf = (id) => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.delete(`http:localhost:3333:smurfs/${id}`)
      .then(response => {
        dispatch({type: GET_SMURFS, smurfs: response.data })
      })
      .catch(err => {
        dispatch({type: ERROR_MESSAGE, errorMessage: "This Smurf is so awesome and god-like, it cannot be deleted by you puny human."})
      })
  }
}