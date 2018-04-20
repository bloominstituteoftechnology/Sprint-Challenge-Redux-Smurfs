import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

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
  const smurfs = axios.get(`http://localhost:3333/smurfs`);
  return dispatch => {
    dispatch({ type: PENDING });
    smurfs
      .then(res => {
        dispatch({ type: SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addSmurf = data => {
  const smurf = axios.post(`http://localhost:3333/smurfs`, data);
  return dispatch => {
    smurf
      .then(res => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const updateSmurf = (id, data) => {
  const smurf = axios.put(`http://localhost:333/smurfs/${id}`, data);
  return dispatch => {
    smurf
      .then(res => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deleteSmurf = id => {
  const smurf = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return dispatch => {
    smurf
      .then(res => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};