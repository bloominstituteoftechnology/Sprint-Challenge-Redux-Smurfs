import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const fetchSmurfs = ()=>{
  return dispatch=>{
    dispatch({type: FETCHING});
    axios.get('http://localhost:3333/smurfs')
    .then(response=>{
      console.log(response);
      dispatch({
        type: SUCCESS,
        smurfs: response.data
      })
    })
    .catch(error=>{
      dispatch({
        type: ERROR,
        errorMessage: 'Error reading from server'
      })
    })
  }
}

export const addSmurf = (smurf)=>{
  return dispatch=>{
    dispatch({type: FETCHING});
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(response=>{
      dispatch({
        type: SUCCESS,
        smurfs: response.data
      })
    })
    .catch(error=>{
      dispatch({
        type: ERROR,
        errorMessage: 'Error adding data to server'
      })
    })
  }
}

export const deleteSmurf = (smurf)=>{
  return dispatch=>{
    dispatch({type: FETCHING});
    axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(response=>{
      dispatch({
        type: SUCCESS,
        smurfs: response.data
      })
    })
    .catch(error=>{
      dispatch({
        type: ERROR,
        errorMessage: 'Error deleting data from server'
      })
    })
  }
}

export const updateSmurf = (smurf)=>{
  return dispatch=>{
    dispatch({type: FETCHING});
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(response=>{
      dispatch({
        type: SUCCESS,
        smurfs: response.data
      })
    })
    .catch(error=>{
      dispatch({
        type: ERROR,
        errorMessage: 'Error updating data on server'
      })
    })
  }
}
