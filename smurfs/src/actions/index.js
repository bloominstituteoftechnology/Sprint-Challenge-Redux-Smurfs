import axios from axios;
export const FETCH_SMURFS_START  = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS  = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE  = 'FETCH_SMURFS_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({type:FETCH_SMURFS_START});
  axios
    .get(`http://localhost:3333`)
    .then(res =>{
        dispatch({type:FETCH_SMURFS_SUCCESS, payload: res.data.results});
    })
    .catch(err => dispatch({FETCH_SMURFS_FAILURE}));
}; 





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
