
import axios from 'axios';

export const GET_SMURF_LOADING = 'GET_SMURF_LOADING';
export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS';
export const GET_SMURF_FAILURE = 'GET_SMURF_FAILURE';
export const ADD_SMURF_LOADING = 'ADD_SMURF_LOADING';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
export const DELETE_SMURF_LOADING = 'DELETE_SMURF_LOADING';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

export const getSmurf = () => (dispatch) =>{
  dispatch({type:GET_SMURF_LOADING})
    axios
      .get('http://localhost:3333/smurfs')
        .then(response =>{
          dispatch({type:GET_SMURF_SUCCESS, payload: response.data})
        })
        .catch(error =>{
          dispatch({type:GET_SMURF_FAILURE, payload : 'Sorry, no Smurfs to be found'})
        })
}

export const addSmurf = (newSmurf) => (dispatch) =>{
  dispatch({type:ADD_SMURF_LOADING})
    axios
      .get('http://localhost:3333/smurfs', newSmurf)
        .then(response =>{
          dispatch({type:ADD_SMURF_SUCCESS, payload: response.data})
        })
        .catch(error =>{
          dispatch({type:ADD_SMURF_FAILURE, payload : 'Sorry, no Smurfs will be added'})
        })
}
export const deleteSmurf = (id) => (dispatch) =>{
   dispatch({type:DELETE_SMURF_LOADING}) 
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
        .then(response =>{
          dispatch({type:DELETE_SMURF_SUCCESS, payload : response.data})
        })
        .catch(error =>{
          dispatch({type:DELETE_SMURF_FAILURE, payload : 'Sorry, no Smurfs will be deleted'})  
        })
      
}
