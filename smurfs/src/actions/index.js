import axios from 'axios';
export const SUCCESS_GET_SMURFS = 'SUCCESS_GET_SMURFS';
export const SUCCESS_POST_SMURF = 'SUCCESS_POST_SMURFS';
export const SUCCESS_DELETE_SMURF = 'SUCCESS_DELETE_SMURF';
export const PENDING_SMURFS = 'PENDING_SMURFS';
export const ERROR_SMURFS = 'ERROR_SMURFS';
export const SUCCESS_PUT_SMURF = 'SUCCESS_PUT_SMURF';

//consolidate all SUCCESS into one SUCCESS


export const getSmurfs = () => {
  let smurfs = axios.get('http://localhost:3333/smurfs')
  return function(dispatch) {
    dispatch({type: PENDING_SMURFS})
    smurfs
      .then(response => {
        setTimeout(() => {
          dispatch({type: SUCCESS_GET_SMURFS, payload: response.data })}, 3000)
      })
      .catch(error => {
        dispatch({type: ERROR_SMURFS, payload: 'ERROR PROCESSING SMURFS'})
      })
  }
}

export const addSmurf = newSmurfData => {
  let newSmurf = axios.post('http://localhost:3333/smurfs', newSmurfData )
  return function(dispatch) {
    newSmurf 
      .then(response => {
        dispatch({type: SUCCESS_POST_SMURF, payload: response.data })
      })
      .catch(error => {
        dispatch({type: ERROR_SMURFS, payload: 'UNABLE TO ADD NEW SMURF. PLEASE PROVIDE UNIQUE VALUES & PROVIDE ALL REQUIRED FIELDS.'})
      })
  }
}

export const deleteSmurf = (id) => {
  let removedSmurf = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return function(dispatch) {
    removedSmurf
      .then(response => {
        dispatch({type: SUCCESS_DELETE_SMURF, payload: response.data })
      })
      .catch(error => {
        dispatch({type: ERROR_SMURFS, payload: 'SMURF COULD NOT BE DELETED'})
      })
  }
}


export const updateSmurf = smurf => {
  let changeSmurf = axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf);
  return function(dispatch) {

    changeSmurf 
      .then(response => {
        dispatch({type: SUCCESS_PUT_SMURF, payload: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR_SMURFS, payload: "UNABLE TO EDIT. PLEASE TRY AGAIN."})
      })
  }

}