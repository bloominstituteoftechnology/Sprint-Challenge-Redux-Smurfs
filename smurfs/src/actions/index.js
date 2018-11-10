/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const GETTING_SMURF = 'GETTING_SMURF';
export const GETTING_SMURF_SUCCESS = 'GETTING_SMURF_SUCCESS';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const DELETEING_SMURF = 'DELETEING_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const CREATEING_SMURF = 'CREATEING_SMURF';
export const CREATE_SMURF = 'CREATE_SMURF';
export const ERROR = 'ERROR';


const URL = 'http://localhost:3333/smurfs'

export const getSmurfs = () => {
const smurfs = axios.get(`${URL}`);
return dispatch => {
  dispatch({type:GETTING_SMURF});
  smurfs
  .then(response=>{
    dispatch({type:GETTING_SMURF_SUCCESS, payload: response.data});
  })
  .catch(err=>{
    dispatch({type:ERROR, payload: err})
  })
  };
};

export const createSmurf = smurf =>{
const newSmurf = axios.post(`${URL}`,smurf)
return dispatch => {
  dispatch({ type: CREATEING_SMURF });
  newSmurf
    .then(({ data }) => {
      dispatch({ type: CREATE_SMURF, payload: data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
};
}





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