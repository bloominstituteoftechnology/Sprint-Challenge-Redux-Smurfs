/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ERROR = 'ERROR';
export const SAVE_SMURFS = 'SAVE_SMURFS';
export const SAVED_SMURFS = 'SAVED_SMURFS';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATED_SMURF = 'UPDATED_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';
export const SELECT_SMURF = 'SELECT_SMURF';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


export const fetchSmurfs = () => {
  const request = axios.get(`http://localhost:3333/smurfs`)
  return (dispatch) => {
      request.then(({data})=> {
          dispatch({type: FETCH_SMURFS, payload: data})
      })
      .then(()=>{
          dispatch({type: FETCHED_SMURFS})
      })
      .catch(err=> {
          dispatch({type: ERROR, error: err})            
      });
  };
};
export const addSmurf = smurf => {
  const request = axios.post(`http://localhost:3333/smurfs`, smurf)
  return (dispatch) => {
      request.then(({data})=> {
          dispatch({type: SAVE_SMURFS, payload: data})
      })
      .then(()=>{
          dispatch({type: SAVED_SMURFS})
      })
      .catch(err=> {
          dispatch({type: ERROR, error: err})            
      });
  };
};
export const selectSmurf = id => ({
  type: SELECT_SMURF,
  id        
})
export const updateSmurf = (id, smurf) => {
  const request = axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
  return (dispatch) => {
      request.then(({data})=> {
          dispatch({type: UPDATING_SMURF, payload: data})
      })
      .then(()=>{
          dispatch({type: UPDATED_SMURF})
      })
      .catch(err=> {
          dispatch({type: ERROR, error: err})            
      });
  };
};
export const deleteSmurf = id => {    
  const request = axios.delete(`http://localhost:3333/smurfs/${id}`)
  return (dispatch) => {
      request.then(({data})=> {
          dispatch({type: DELETING_SMURF, payload: data})
      })
      .then(()=>{
          dispatch({type: DELETED_SMURF})
      })
      .catch(err=> {
          dispatch({type: ERROR, error: err})            
      })
  }
}