import axios from 'axios';
import * as smurfTypes from './actionTypes';

export const fetchSmurfs = () =>{
  const smurfs = axios
  .get('http://localhost:3333/smurfs')
  return dispatch =>{
      dispatch({type: smurfTypes.PENDING_SMURFS});
      smurfs
      .then(response =>{
          console.log(response)
          dispatch({
              type: smurfTypes.SUCCESS_SMURFS,
              payload: response.data
          })
      })
      .catch(err =>{
          dispatch({
              type:smurfTypes.ERROR_SMURFS,
              payload: 'ERROR fetching smurfs'
          })
      })
  }  
}