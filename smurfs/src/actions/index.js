import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
export const PENDING = 'PENDING';
export const ERROR = 'ERROR';
export const DELETE_SMURF = 'DELETE_SMURF';

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: PENDING });
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        dispatch({ type: GET_SMURFS, smurfs: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'SMURFING ERROR' })
      })
  }
}

export const addSmurf = (smurf) => {
  return (dispatch) => {
    dispatch({ type: PENDING });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        dispatch({ type: ADD_SMURF, smurfs: response.data });
      })
      .catch(() => {
        dispatch({ type: ERROR, error: 'SMURFING ERROR' })
      })
   }
}

export const deleteSmurf = (id) => {
  return dispatch => {
    dispatch({ type: PENDING });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log("RESPONSE", response)
        dispatch({ type: DELETE_SMURF, smurfs: response.data })
      })
      .catch( () => {
        dispatch({ type: ERROR, error: 'INCOMPETENT FOOL!'})
      })
  }
}
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
 
 
 
 
