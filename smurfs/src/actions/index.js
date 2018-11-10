export const SMURF_LOADING = 'SMURF_LOADING';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAILURE = 'SMURF_FAILURE';

export const getSmurf = () => (dispatch) =>{
  dispatch({type:SMURF_LOADING})
    axios
      .get('http://localhost:3333/smurfs')
        .then(response =>{
          dispatch({type:SMURF_SUCCESS, payload: response.data})
        })
        .catch(error =>{
          dispatch({type:SMURF_FAILURE, payload : 'Sorry, no Smurfs to be found'})
        })
}
export const getSmurf = () => (dispatch) =>{
  dispatch({type:SMURF_LOADING})
    axios
      .get('http://localhost:3333/smurfs')
        .then(response =>{
          dispatch({type:SMURF_SUCCESS, payload: response.data})
        })
        .catch(error =>{
          dispatch({type:SMURF_FAILURE, payload : 'Sorry, no Smurfs to be found'})
        })
}
export const addSmurf = (newSmurf) => (dispatch) =>{
  dispatch({type:SMURF_LOADING})
    axios
      .get('http://localhost:3333/smurfs', newSmurf)
        .then(response =>{
          dispatch({type:SMURF_SUCCESS, payload: response.data})
        })
        .catch(error =>{
          dispatch({type:SMURF_FAILURE, payload : 'Sorry, no Smurfs will be added'})
        })
}
export const Smurf = (id) => (dispatch) =>{
   dispatch({type:SMURF_LOADING}) 
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
        .then(response =>{
          dispatch({type:SMURF_SUCCESS, payload : response.data})
        })
        .catch(error =>{
          dispatch({type:SMURF_FAILURE, payload : 'Sorry, no Smurfs will be deleted'})  
        })
      
}
