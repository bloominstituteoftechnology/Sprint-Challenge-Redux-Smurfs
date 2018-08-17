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

export const fetchSmurf = () => {
  const request = axios.get(`http://localhost:5000/api/smurfs`)
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
  const request = axios.post(`http://localhost:5000/api/smurfs`, smurf)
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
  const request = axios.put(`http://localhost:5000/api/smurfs/${id}`, smurf)
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
  const request = axios.delete(`http://localhost:5000/api/smurfs/${id}`)
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
