/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_SMURFS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_FRIENDS_ERROR = 'FETCHING_SMURFS_ERROR';

export const fetchSmurfs = () => {
  const friends = axios.get('http://localhost:3333/api/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
      .then(response => {
          dispatch({
            type: FETCHING_SMURFS_SUCCESS,
            payload: response.data
          });
        })
        .catch(error => {
          dispatch({ 
            type: FETCHING_SMURFS_ERROR, 
            payload: "No smurfs found!"
          });
        });
      };
    };


    export const addSmurf = data => {
      const smurfs = axios.post('http://localhost:3333/api/smurfs', data);
      return dispatch => {
        smurfs
          .then(response => {
            dispatch(fetchSmurfs());
          })
          .catch(error => {
            dispatch({
              type: FETCHING_SMURFS_ERROR,
              payload: 'No smurfs found!'
            });
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
