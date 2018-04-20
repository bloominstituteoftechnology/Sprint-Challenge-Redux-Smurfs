import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const CR_PENDING = 'CR_PENDING';
export const CR_SUCCESS = 'CR_SUCCESS';
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
export const getSmurfs = () => {
  const getRequest = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({type: CR_PENDING});
    getRequest.then(
      response => {
        dispatch({
          type: CR_SUCCESS,
          payload: response.data
        });
      }
    ).catch(
      err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      }
    );
  };
};

export const addSmurf = data => {
  const postRequest = axios.post('http://localhost:3333/smurfs', data);
  return dispatch => {
    dispatch({type: CR_PENDING});
    postRequest.then(
      response => {
        dispatch({
          type: CR_SUCCESS,
          payload: response.data
        });
      }
    ).catch(
      err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      }
    );
  };
};