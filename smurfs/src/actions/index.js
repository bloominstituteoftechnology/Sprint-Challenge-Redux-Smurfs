import axios from 'axios'
import reducers from '../reducers';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SMURF_START = 'ADDING_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';


export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_START });
 axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
     console.log(res.data, 'inside fetch')
     dispatch({
             type: FETCH_SUCCESS,
             payload: res.data
         })
     })
     .catch(err => {
         dispatch({
             type: FETCH_FAIL,
             payload: err
         })
 })
}

export const addingSmurf = (data) => dispatch => {
  dispatch({type: ADD_SMURF_START});
  axios.post('http://localhost:3333/smurfs', data)
    .then(res => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: reducers.data
      })
    })
    .catch(err => {
      dispatch({
        type: ADD_SMURF_FAIL,
        payload: err
      })
    })
}

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
