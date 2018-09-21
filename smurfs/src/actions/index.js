/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';
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
export const fetchSmurfs = () => dispatch => {
  dispatch ({type: FETCHING_SMURFS});
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      // console.log('axios fetch response:', response);
      dispatch({type: SMURFS_FETCHED, payload: response.data })
    })
    .catch(error => {
      // console.log('axios fetch error:', error);
      dispatch({type: ERROR, payload: error})
    })
};

export const addSmurf = smurf => dispatch => {
  dispatch ({type: ADDING_SMURF});
  axios 
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      // console.log('axios adding response:', response);
      dispatch({type: SMURF_ADDED, payload: response.data})
    })
    .catch(error => {
      // console.log('axios adding error:', error);
      dispatch({type: ERROR, payload: error})
    })
};

export const deleteSmurf = id => dispatch => {
  dispatch ({type: DELETING_SMURF})
  axios
    .delete('http://localhost:3333/smurfs', {data: {id}})
    .then(({data}) => {
      dispatch({type:SMURF_DELETED, payload:data});
    })
    .catch(error => {
      dispatchEvent({type: ERROR, payload:error})
    })
}




