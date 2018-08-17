import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const CREATE_SMURF = 'CREATE_SMURF';
export const CREATING_SMURF = 'CREATING_SMURF';
export const ERROR = 'ERROR';

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}`);
  return (dispatch) => {
    dispatch({type: GETTING_SMURFS})
    smurfs
      .then(response => {
        dispatch({ type: GET_SMURFS, payload: response.data});
      });
  };
};

export const addSmurf = () => {
  const newSmurf = axios.post(`${URL}`)
  return (dispatch) => {
    dispatch({type: CREATING_SMURF})
    newSmurf
      .then(({ data }) => {
        dispatch({ type: CREATE_SMURF, payload: data});
      });
  };
};

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
